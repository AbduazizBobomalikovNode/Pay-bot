const { Telegraf, Markup, session, Scenes } = require('telegraf');
const fs = require("fs");
const scenesPayme = require('./room/payme');
const scenesClick = require('./room/click');
const { menu, button } = require("./keyboard/meny");

const bot = new Telegraf(process.env.BOT_TOKEN);
const stage = new Scenes.Stage([scenesPayme, scenesClick]);

bot.use((ctx, next) => {
    ctx.session = ctx.session ? ctx.session : {};
    return next();
})

//TOKEN_PAYME TOKEN_CLICK  BOT_TOKEN
bot.use(Telegraf.log())
bot.use(session());
bot.use(stage.middleware());

let kanal = process.env.INFO_ADMIN_CHANNEL;

bot.start(ctx => {
    let text = ctx.message.text.replace("/start","").trim()
    if(text == "pay"){
        ctx.replyWithPhoto({ source: fs.createReadStream("./images/world.jpg") }, {
            caption: "sharotnoma",
            parse_mode: "HTML",
            ...button
        })
    }
    console.log(text)
    let soname = "";
    if (ctx.message.chat.last_name != undefined) {
        soname = ctx.message.chat.last_name;
    }
    let helloText = `Assalomu aleykum, ${soname} ${ctx.message.chat.first_name}`;
    ctx.reply(helloText, menu)
})
bot.hears("To'lovlar", ctx => {
    ctx.replyWithPhoto({ source: fs.createReadStream("./images/world.jpg") }, {
        caption: "sharotnoma",
        parse_mode: "HTML",
        ...button
    })
})
bot.action("chek_payme", async ctx => {
    ctx.answerCbQuery("bajarildi")
    ctx.scene.enter('scenesPayme');
})
bot.action("chek_click", async ctx => {
    ctx.scene.enter('scenesClick');
})
bot.hears("Joylashuvimiz", ctx => {
    ctx.replyWithLocation(
        41.326972,
        69.255485
    )
})
bot.on("pre_checkout_query", ctx => {
    let id = ctx.update.pre_checkout_query.id;
    ctx.telegram.answerPreCheckoutQuery(id, true, "shunarsiz katolik");
})
bot.on("shipping_query", ctx => {
    console.log("shipping_query:", ctx);
})
let reg = function(teg){
    if (teg<10) {
        return '0'+teg
    }else return teg
}
function sendChek(ctx) {
    let name = ctx.message.chat.first_name;
    let nextName = ctx.message.successful_payment.order_info.name;
    let username = ctx.message.chat.username;
    let telefon = ctx.message.successful_payment.order_info.phone_number;

    let date = new Date();
    let sana = `${date.getFullYear()}.${reg(date.getMonth() + 1)}.${reg(date.getDate())}`;
    let vaqt = `${reg(date.getHours())}:${reg(date.getMinutes())}`;

    let payID = ctx.message.successful_payment.provider_payment_charge_id;
    let telegramPayId = ctx.message.successful_payment.telegram_payment_charge_id;
    let UZS = ctx.message.successful_payment.total_amount;

    let chek =
        `<b>Namuna.uz uchun to'lov.</b>\n` +
        `To'lov Id(payme):<i>${payID}</i>\n` +
        `To'lov Id(talegram):<i>${telegramPayId}</i>\n` +
        `To'lov summa : <i>${parseInt(UZS / 100)}.${reg(UZS % 100)}</i> so'm\n`+
        `To'lovchi Ismi(maydondan):${nextName}\n` +
        `To'lovchi Telefoni(maydondan):+${telefon}\n` +
        `Telegram Ismi:${name}\n` +
        `Telegram username: @${username}\n` +
        `To'lov sanasi: ${sana}\n` +
        `To'lov vaqti: ${vaqt}\n` +
        `Namuna.uz chek hisob.`
    return chek;
}
bot.on("successful_payment", ctx => {
    try{
        let chek = sendChek(ctx);
        ctx.telegram.sendMessage( -1001827600764,chek,{parse_mode:'HTML'});
        // console.log("to'landi", ctx.message);
    }catch(error){
        console.log("kanalga chek jo'natishda xtolik:",error);
    }
})
bot.launch();

// Enable graceful stop
process.once('SIGINT', () => bot.stop('SIGINT'));
process.once('SIGTERM', () => bot.stop('SIGTERM'));
