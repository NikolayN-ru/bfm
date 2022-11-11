import { Body, Controller, Get, Post } from '@nestjs/common';
import { TelegramService } from './telegram.service';

@Controller('telegram')
export class TelegramController {
    constructor(private readonly telegramService: TelegramService) { }

    @Post('')
    async sendMessage(@Body('msg') msg: string) {
        return this.telegramService.sendMessage(msg)
    }
}
