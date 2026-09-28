require("dotenv").config();

const { Telegraf } = require("telegraf");

const BOT_TOKEN = process.env.BOT_TOKEN;

if (!BOT_TOKEN) {
  console.error("❌ BOT_TOKEN topilmadi!");
  console.error("⚠️ .env faylida BOT_TOKEN bo‘lishi kerak.");
  process.exit(1);
}

const bot = new Telegraf(BOT_TOKEN);

bot.start((ctx) => {
  ctx.reply(
    "♟️ LIVO Chess'ga xush kelibsiz!\n\n" +
    "Men shaxmat o‘yinlaringizni tahlil qilishga yordam beraman.\n\n" +
    "Hozircha Lichess o‘yin havolasini kutyapman."
  );
});

bot.on("text", (ctx) => {
  const message = ctx.message.text;

  if (message.startsWith("https://lichess.org/")) {
    ctx.reply(
      "♟️ Lichess havolasi qabul qilindi.\n\n" +
      "🔄 O‘yinni olish funksiyasini hozir qo‘shamiz."
    );
    return;
  }

  ctx.reply(
    "Lichess o‘yin havolasini yuboring.\n\n" +
    "Masalan:\n" +
    "https://lichess.org/XXXXXXXX"
  );
});

bot.launch();

console.log("✅ LIVO Chess Telegram bot ishga tushdi!");

process.once("SIGINT", () => bot.stop("SIGINT"));
process.once("SIGTERM", () => bot.stop("SIGTERM"));
