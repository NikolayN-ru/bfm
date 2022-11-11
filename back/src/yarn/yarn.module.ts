import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypegooseModule } from 'nestjs-typegoose';
import { YarnController } from './yarn.controller';
import { YarnModel } from './models/yarn.model';
import { YarnService } from './yarn.service';
import { CategoryModel } from './models/category.model';
import { TagModel } from './models/tag.model';

@Module({
  controllers: [YarnController],
  providers: [YarnService],
  imports: [
    TypegooseModule.forFeature([
      {
        typegooseClass: YarnModel,
        schemaOptions: { collection: 'Yarn' }
      },
      {
        typegooseClass: CategoryModel,
        schemaOptions: { collection: 'Category' }
      },
      {
        typegooseClass: TagModel,
        schemaOptions: { collection: 'Tag' }
      }
    ]),
    ConfigModule
  ],
})
export class YarnModule { }
