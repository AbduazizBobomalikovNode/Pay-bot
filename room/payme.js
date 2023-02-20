const {  Scenes, Markup} = require('telegraf');
const {menu} = require("../keyboard/meny");

const scenesPayme = new Scenes.BaseScene('scenesPayme');

const getInvoice = (id, narx) => {
    const invoice = {
        chat_id: id,
        provider_token: process.env.TOKEN_PAYME,
        start_parameter: `world-uz-payme-${id}`,
        title: 'world.uz', // Product name, 1-32 characters
        description: 'Eslatma! world.uz kompanyasiga paymedan tolov.', // Product description, 1-255 characters
        currency: 'UZS', // ISO 4217 Three-Letter Currency Code
        prices: [{ label: 'world.uz  service:', amount: narx * 100 }], // Price breakdown, serialized list of components in JSON format 100 kopecks * 100 = 100 rubles
        payload: { // The payload of the invoice, as determined by the bot, 1-128 bytes. This will not be visible to the user, use it for your internal processes.
            unique_id: `${id}_${Number(new Date())}`,
            provider_token: process.env.TOKEN_PAYME
        },
        need_name:true,
        need_shipping_address:false,
        need_email:false,
        need_phone_number:true,
    }
    return invoice
}

scenesPayme.enter(async ctx => {
    ctx.reply("Payme orqali qancha to'lov qilmoqchisiz?")
})
scenesPayme.command("orqaga",ctx=>{
    ctx.reply("Bosh menyu",menu)
    ctx.scene.leave();
})
scenesPayme.on("text", async ctx => {
    try {
        let narx = parseInt(ctx.message.text);
        if (narx > 1000) {
            let result = await ctx.replyWithInvoice(getInvoice(ctx.from.id,narx)) //  replyWithInvoice method for invoicing 
            console.log(result);
            ctx.scene.leave();
        }else{
            ctx.reply('Siz no\'tog\'ri qiymat kiritdingiz!\nbekor qilish uchun: /orqaga.')
        }
    } catch (error) {
        console.log("xatolik payme:",error);
        ctx.scene.leave();
    }
})

module.exports = scenesPayme;
