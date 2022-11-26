import { Module } from '@nestjs/common';
import { ProductService } from './product.service';
import { ProductController } from './product.controller';
import { ConfigModule } from '@nestjs/config';
import { TypegooseModule } from 'nestjs-typegoose';
import { CategoryProdModel } from './models/categoryProd.model';
import { ProductModel } from './models/product.model';

@Module({
  imports: [
    TypegooseModule.forFeature([
      {
        typegooseClass: CategoryProdModel,
        schemaOptions: { collection: 'CategoryProd' },
      },
      {
        typegooseClass: ProductModel,
        schemaOptions: { collection: 'Product' },
      },
    ]),
    ConfigModule,
  ],
  providers: [ProductService],
  controllers: [ProductController],
})
export class ProductModule {}
