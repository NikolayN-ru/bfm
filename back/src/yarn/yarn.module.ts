import { Module } from '@nestjs/common';
import { YarnController } from './yarn.controller';
import { YarnService } from './yarn.service';

@Module({
  controllers: [YarnController],
  providers: [YarnService]
})
export class YarnModule {}
