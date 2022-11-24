import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypegooseModule } from 'nestjs-typegoose';
import { OrderModel } from './models/order.model';
import { OrderController } from './order.controller';
import { OrderService } from './order.service';

@Module({
  imports: [
    TypegooseModule.forFeature([
      {
        typegooseClass: OrderModel,
        schemaOptions: { collection: 'Order'}
      }
    ]),
    ConfigModule
  ],
  controllers: [OrderController],
  providers: [OrderService]
})
export class OrderModule {}
