import {Telegraf, Markup} from "telegraf";
import {message} from "telegraf/filters.js";
const token = 'your_token';
const webAppUrl = 'https://myapp.com'

const bot = new Telegraf(token);

bot.command('start', (ctx) => {
    ctx.reply('Добро пожаловать! Нажмите кнопку нижу, чтобы запустить приложение',
        Markup.keyboard([
            Markup.button.webApp(
                'Отправить сообщение',
                webAppUrl + '/feedback'
            )
        ])
    );
});

bot.on(message('web_app_data'), async ctx => {
    const data = ctx.webAppData.json();
    ctx.reply(`Ваше сообщение: ${data?.feedback}` ?? 'empty message');
});

bot.launch();