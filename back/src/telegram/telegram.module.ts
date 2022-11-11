import { Module } from '@nestjs/common';
import { TelegramService } from './telegram.service';
import { TelegramController } from './telegram.controller';

@Module({
  providers: [TelegramService],
  exports: [TelegramService],
  controllers: [TelegramController], // экспортируем наш модуль что бы использовать в других сервисах
})
export class TelegramModule {}
