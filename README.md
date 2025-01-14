# Pay-bot for payme.uz and  click.uz

**Pay-bot** - bu to'lovlarni avtomatlashtirish va boshqarish uchun yaratilgan bot. Ushbu loyiha foydalanuvchilarga qulay interfeys orqali to'lov jarayonlarini soddalashtirishga yordam beradi.

## 📋 Loyiha haqida

Ushbu loyiha Node.js platformasida ishlab chiqilgan bo'lib, Telegram bot sifatida ishlaydi. Pay-bot [PAYME](https://payme.uz/) [CLICK](https://click.uz/) tizimlari bilan integratsiya qilinishi va real vaqt rejimida foydalanuvchilar bilan ishlashi mumkin.

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

4. Loyihani ishga tushiring:
   ```bash
   npm start
   ```

## 🔐 Muhit o'zgaruvchilari
  - BOT_TOKEN - sizning  telegram bot  tokeningiz
  - DATABASE_URL - sizning  MongoDb   cloud dagi tokeningiz
  - TOKEN_CLICK - CLICK.uz  tizimidagi (kassa) tokeningiz
  - TOKEN_PAYME - PAYME.uz  tizimidagi (kassa) tokeningiz
  - INFO_ADMIN_CHANNEL - to'lovlar haqida adminga  bildirish uchun kanal  ID yoki USERNAME si 
   
## ⚙ Muhit o'zgaruvchilari Muhitga taminlash
1. Windows muhiti uchun:
   ```bash
set BOT_TOKEN=sizning_telegram_bot_tokeningiz
set DATABASE_URL=sizning_MongoDb_cloud_dagi_tokeningiz
set TOKEN_CLICK=CLICK.uz_tizimidagi_(kassa)_tokeningiz
set TOKEN_PAYME=PAYME.uz_tizimidagi_(kassa)_tokeningiz
set INFO_ADMIN_CHANNEL=to'lovlar_haqida_adminga_bildirish_uchun_kanal_ID_yoki_USERNAME_si 
   ```
2. Linux muhiti uchun:
   ```bash
export BOT_TOKEN="sizning_telegram_bot_tokeningiz"
export DATABASE_URL="sizning_MongoDb_cloud_dagi_tokeningiz"
export TOKEN_CLICK="CLICK.uz_tizimidagi_(kassa)_tokeningiz"
export TOKEN_PAYME="PAYME.uz_tizimidagi_(kassa)_tokeningiz"
export INFO_ADMIN_CHANNEL="to'lovlar_haqida_adminga_bildirish_uchun_kanal_ID_yoki_USERNAME_si" 
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
- **Telegram:** [@AbduazizBobomalikov](https://t.me/@Bobomalikov_Abduaziz)

## 🛡 Litsenziya

Ushbu loyiha [MIT](LICENSE) litsenziyasi asosida tarqatiladi.
