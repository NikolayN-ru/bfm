import { Injectable } from '@nestjs/common';
import { ModelType } from '@typegoose/typegoose/lib/types';
import { InjectModel } from 'nestjs-typegoose';
import { OrderModel } from './models/order.model';

@Injectable()
export class OrderService {
  constructor(
    @InjectModel(OrderModel) private readonly orderModel: ModelType<any>,
  ) {}

  async findAll(): Promise<any> {
    return await this.orderModel.find().sort({ _id: -1 });
  }

  async create(body): Promise<any> {
    const date = String(String(new Date()).split(' ').slice(1, 5));
    const candidate = { ...body, number: date, status: 'created' };
    return await this.orderModel.create(candidate);
  }

  async findById(id: string): Promise<any> {
    return await this.orderModel.findById(id);
  }

  async update(id, body): Promise<any> {
    console.log(id, body); 
    const _id = id;
    return await this.orderModel
      .findByIdAndUpdate(_id, body, {
        new: true,
      })
      .exec();
  }
}
