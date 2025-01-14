# Pay-bot

**Pay-bot** - bu to'lovlarni avtomatlashtirish va boshqarish uchun yaratilgan bot. Ushbu loyiha foydalanuvchilarga qulay interfeys orqali to'lov jarayonlarini soddalashtirishga yordam beradi.

## 📋 Loyiha haqida

Ushbu loyiha Node.js platformasida ishlab chiqilgan bo'lib, Telegram bot sifatida ishlaydi. Pay-bot turli xil to'lov tizimlari bilan integratsiya qilinishi va real vaqt rejimida foydalanuvchilar bilan ishlashi mumkin.

### Asosiy funksiyalar:
- 🔐 Foydalanuvchilar autentifikatsiyasi va avtorizatsiyasi.
- 💳 To'lovlarni yuborish va qabul qilish.
- 📊 Real vaqt statistikasi va to'lovlar haqida hisobot.
- 🔄 API orqali boshqa tizimlar bilan integratsiya.

## 🛠 Texnologiyalar

Loyiha quyidagi texnologiyalar asosida qurilgan:
- **Node.js** - asosiy backend platformasi.
- **Telegram Bot API** - botni yaratish va boshqarish uchun.
- **MongoDB** - ma'lumotlar bazasi.
- **dotenv** - maxfiy kalitlarni boshqarish uchun.

## ⚙ O'rnatish

Quyidagi qadamlarni bajarib loyihani o'z kompyuteringizda ishga tushiring:

1. Repozitoriyani klon qiling:
   ```bash
   git clone https://github.com/AbduazizBobomalikovNode/Pay-bot.git
   ```

2. Loyihaga o'ting:
   ```bash
   cd Pay-bot
   ```

3. Kerakli bog'lamalarni o'rnating:
   ```bash
   npm install
   ```

4. `.env` faylini yaratib, kerakli sozlamalarni qo'shing:
   ```plaintext
   BOT_TOKEN=YOUR_TELEGRAM_BOT_TOKEN
   DATABASE_URL=YOUR_MONGODB_CONNECTION_URL
   ```
   `.env` fayliga boshqa kerakli sozlamalarni qo'shishni unutmang.

5. Loyihani ishga tushiring:
   ```bash
   npm start
   ```

## 📜 Foydalanish

- Telegram botingizga `/start` komandasi orqali kirib, foydalanishni boshlashingiz mumkin.
- To'lovlarni yuborish uchun **To'lov yuborish** bo'limidan foydalaning.
- Foydalanuvchi statistikasi va hisobini boshqarish uchun botning boshqaruv paneli mavjud.

## 💡 Hissa qo'shish

Hissa qo'shish uchun quyidagi qadamlarni bajaring:

1. Ushbu repozitoriyani fork qiling.
2. O'zingizning tarmog'ingizda o'zgartirishlar qiling.
3. Pull request yuboring.

## 📧 Bog'lanish

Loyiha haqida savollaringiz bo'lsa, quyidagi manzilga murojaat qiling:
- **Muallif:** [Abduaziz Bobomalikov](https://github.com/AbduazizBobomalikovNode)
- **Telegram:** [@AbduazizBobomalikov](https://t.me/AbduazizBobomalikov)

## 🛡 Litsenziya

Ushbu loyiha [MIT](LICENSE) litsenziyasi asosida tarqatiladi.
