import { Telegraf, Markup } from 'telegraf'

const token = '' // Токен бота
const webAppUrl = '' // Ссылка на приложени

const bot = new Telegraf(token)

bot.command('start', (ctx) => {
    ctx.reply(
        'Привет! 🤝 Добро пожаловать в крутой хамстер камбАт! 😎 Но хамстер камбАт не простой, а золотой! 🙄 Этот хамстер камбАт с учителями 509 (На данный момент только 1 корпуса)! 😲 Удачной игры! 😀', 
        Markup.inlineKeyboard([
            Markup.button.webApp('Открыть', `${webAppUrl}?ref=${ctx.payload}
        `),
    ])
)
})

bot.launch()