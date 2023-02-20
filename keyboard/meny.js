const {Markup} = require("telegraf");
const menu = Markup.keyboard(
    [
        ["To'lovlar"], 
        ["Joylashuvimiz"]
    ]).resize() 

const inlineMenu = Markup.inlineKeyboard([
     Markup.button.callback('💳payme',"chek_payme"),
    // Markup.button.callback('💳click','chek_click')
])
module.exports = {menu:menu,button:inlineMenu};