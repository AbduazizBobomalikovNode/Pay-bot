const { Telegraf, Markup, session, Scenes } = require('telegraf');
const fs = require("fs");
const scenesPayme = require('./room/payme');
const scenesClick = require('./room/click');
const { menu, button } = require("./keyboard/meny");

// const keyboard = Markup.inlineKeyboard([
//     Markup.button.callback('💳payme',"chek_payme"),
//     Markup.button.callback('💳click','chek_click')
// ])

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

let kanal = -1001866625187;

// bot.use(async (ctx, next) => {
//     console.time(`Processing update ${ctx.update.update_id}`);
//     try {
//         let user_id = ctx.message ? ctx.message.from.id : ctx.update.callback_query.message.from.id;
//         let user = await ctx.telegram.getChatMember(kanal, user_id).catch(err => {
//             console.error(`bot hali admin emas${err}`);
//         });
//         if (user.status == 'left') {
//             ctx.reply(
//                 `Diqat❗️ botni ishlatishdan oldin 🇺🇿 World.uz kanaliga obuna bo'ling👇🏼\n\nkeyin yangilash uchun /start buyrug'ini bosing.`,
//                 {
//                     parse_mode: 'HTML',
//                     ...Markup.inlineKeyboard([[
//                         Markup.button.url('🇺🇿 World.uz',
//                             await ctx.telegram.exportChatInviteLink(kanal))
//                     ]])
//                 }).catch(err => {
//                     console.error(`bloklanish yoki boshqa xatolik : ${err}`)
//                 });
//         } else {
//             await next()
//         }
//     } catch (err) {
//         console.log('middleware xatolik bo\'lmoqda');
//         await next()
//     }
//     console.timeEnd(`Processing update ${ctx.update.update_id}`);
// })



bot.start(ctx => {
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
    console.log("To'lov uchun rahmat!:", ctx.update.pre_checkout_query)
    let id = ctx.update.pre_checkout_query.id;
    ctx.telegram.answerPreCheckoutQuery(id, true, "shunarsiz katolik");
})
bot.on("shipping_query", ctx => {
    console.log("shipping_query:", ctx);
})
function sendChek(ctx) {
    let name = ctx.message.chat.first_name;
    let nextName = ctx.message.successful_payment.order_info.name;
    let username = ctx.message.chat.username;
    let telefon = ctx.message.successful_payment.order_info.phone_number;

    let date = new Date();
    let sana = `${date.getFullYear()}.${date.getMonth() + 1}.${date.getDate()}`;
    let vaqt = `${date.getHours()}:${date.getMinutes()}`;

    let payID = ctx.message.successful_payment.provider_payment_charge_id;
    let telegramPayId = ctx.message.successful_payment.telegram_payment_charge_id;
    let UZS = ctx.message.successful_payment.total_amount;

    let chek =
        `<b>World.uz uchun to'lov.</b>\n` +
        `To'lov Idsi(payme): <i>${payID}</i>.\n` +
        `To'lov Idsi(talegram): <i>${telegramPayId}</i>.\n` +
        `To'lov summa : <i>${parseInt(UZS / 100)}.${UZS % 100}</i> so'm.\n`+
        `To'lovchi Ismi(maydondan): ${nextName}.\n` +
        `To'lovchi Telefoni(maydondan): +${telefon}.\n` +
        `Telegram Ismi: ${name}.\n` +
        `Telegram username: @${username}.\n` +
        `To'lov sanasi: ${sana}.\n` +
        `To'lov vaqti: ${vaqt}.\n` +
        `WorlduzBot yuborilgan chek.`
    return chek;
}
bot.on("successful_payment", ctx => {
    try{
        let chek = sendChek(ctx);
        ctx.telegram.sendMessage( -1001827600764,chek,{parse_mode:'HTML'});
        console.log("to'landi", ctx.message);
    }catch(error){
        console.log("kanalga chek jo'natishda xtolik:",error);
    }
})
bot.launch();

// Enable graceful stop
process.once('SIGINT', () => bot.stop('SIGINT'));
process.once('SIGTERM', () => bot.stop('SIGTERM'));