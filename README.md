# Pay-bot

Payme va Click orqali to'lov qabul qiladigan Telegram bot.

Mijoz chatdan chiqmasdan to'laydi, tizim to'lovni o'zi tasdiqlaydi — chek rasmini tekshirish shart emas.

---

## Muammo

Kichik biznes Telegram orqali sotadi. Mijoz to'laydi, chek rasmini tashlaydi, sotuvchi uni ochib ko'radi, summani tekshiradi va buyurtmani tasdiqlaydi.

Har buyurtma uchun bir necha daqiqa. Kuniga o'nlab buyurtma bo'lsa — soatlar. Kechqurun esa hech kim javob bermaydi va mijoz ertagacha kutadi.

Bank kabinetiga kirib solishtirish alohida ish, va u ham qo'lda qilinadi.

## Nima qiladi

- **To'lovni qabul qiladi** — [Payme](https://payme.uz) va [Click](https://click.uz) orqali
- **O'zi tasdiqlaydi** — to'lov o'tgani tizimga xabar qilinadi, chek rasmi kerak emas
- **Foydalanuvchilarni ajratadi** — oddiy foydalanuvchi va admin huquqlari alohida
- **Hisobot beradi** — to'lovlar va statistika bot ichida
- **Kanalga xabar yuboradi** — har to'lov haqida admin kanaliga

## Qanday ishlaydi

```
Mijoz  ──►  xizmatni tanlaydi
              └─► to'lov havolasi (Payme yoki Click)
                    └─► to'lov amalga oshadi
                          ├─► tizim tasdiqlaydi
                          ├─► bazaga yoziladi
                          └─► admin kanaliga xabar
```

## O'rnatish

```bash
git clone https://github.com/AbduazizBobomalikovNode/Pay-bot.git
cd Pay-bot
npm install

cp .env.example .env      # qiymatlarni to'ldiring
npm start
```

## Environment

| O'zgaruvchi | Nima uchun |
|---|---|
| `BOT_TOKEN` | [@BotFather](https://t.me/BotFather) bergan token |
| `TOKEN_PAYME` | Payme merchant kaliti |
| `TOKEN_CLICK` | Click merchant kaliti |
| `INFO_ADMIN_CHANNEL` | Xabar boradigan kanal ID |

Merchant kalitlari to'lov tizimlarining shaxsiy kabinetidan olinadi.

## Tuzilma

```
index.js      bot va to'lov mantiqi
room/         suhbat sahnalari
keyboard/     menyu tugmalari
images/       rasmlar
Procfile      serverga joylash uchun
```

## Texnologiyalar

Node.js · Telegraf · Payme API · Click API
