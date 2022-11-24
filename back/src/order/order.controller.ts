import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';
import { OrderService } from './order.service';

@Controller('order')
export class OrderController {

    constructor(private readonly orderService: OrderService) {}

    @Get('all')
    async findAll() {
        return await this.orderService.findAll()
    }

    // @Get(':id')
    // async findById(@Param('id') id: string) {
    //     return await this.orderService.findById(id);
    // }

    @Post()
    async create(@Body() body) {
        return await this.orderService.create(body);
    }

    // @Put(':id')
    // async update(@Param('id') id: string, @Body() body) {
    //     return await this.orderService.update(id, body);
    // }
}
