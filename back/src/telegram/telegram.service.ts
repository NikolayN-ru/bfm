import { Injectable } from '@nestjs/common';
import { getTelegramConfig } from 'src/config/telegram.config';
import { Telegraf } from 'telegraf';
import { ExtraReplyMessage } from 'telegraf/typings/telegram-types';
import { ITelegram } from './telegram.interface';

@Injectable()
export class TelegramService {
    bot: Telegraf;
    options: ITelegram;

    constructor() {
        this.options = getTelegramConfig()
        this.bot = new Telegraf(this.options.token);
    }

    async sendMessage(msg: string, options?: ExtraReplyMessage, chatId: string = this.options.chatId) {
        // new Date().getDate()
        const newMessage = `новый заказ ${msg}`
        await this.bot.telegram.sendMessage(chatId, newMessage, {
            parse_mode: 'HTML',
            ...options,
        })
    }
}
