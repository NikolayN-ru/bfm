import { Module } from '@nestjs/common';
import { TypegooseModule } from 'nestjs-typegoose';
import { ActorController } from './actor.controller';
import { ActorModel } from './actor.model';
import { ActorService } from './actor.service';

@Module({
  controllers: [ActorController],
  providers: [ActorService],
  imports: [
    TypegooseModule.forFeature([
      {
        typegooseClass: ActorModel,
        schemaOptions: {
          collection: 'Actor'
        }
      }
    ]),
  ],
})
export class ActorModule { }
