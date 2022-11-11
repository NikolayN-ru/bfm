import { Body, Controller, Delete, Get, HttpCode, Param, Patch, Post, Put, UsePipes, ValidationPipe } from '@nestjs/common';
import { CategoryDto } from './dto/category.dto';
import { CreateYarnDto } from './dto/CreateYarn.dto';
import { YarnDto } from './dto/yarn.dto';
import { IYarnModel } from './interface/yarn.interface';
import { CategoryModel } from './models/category.model';
import { YarnService } from './yarn.service';

@Controller('yarn')
export class YarnController {

    constructor(private readonly yarnService: YarnService) { }

    //CategoryController
    @Post('category')
    async newCategory(): Promise<any> {
        return this.yarnService.categoryAdd();
    }

    @Put('category/:id')
    @HttpCode(200)
    async uploadCategory(@Param('id', ValidationPipe) id: string, @Body() dto: CategoryDto) {
        return this.yarnService.categoryUpload(id, dto);
    }

    @Get('category/all')
    async categoryAllAgregate() {
        return this.yarnService.categoryAllAgregate();
    }

    //YarnController
    @HttpCode(200)
    @Post('new')
    async getYarn(): Promise<any> {
        return this.yarnService.addYarnItem();
    }

    @UsePipes(new ValidationPipe())
    @Put('new/:id')
    async updateYarn(@Param('id') id: string, @Body() dto: YarnDto): Promise<any> {
        return this.yarnService.updateYarnItem(id, dto);
    }

    @Get('all')
    @HttpCode(200)
    async getAll(): Promise<IYarnModel[]> {
        return this.yarnService.getAll();
    }

    @Delete(':id')
    @HttpCode(200)
    async delete(@Param('id') id: string): Promise<IYarnModel> {
        return this.yarnService.delete(id);
    }

    @Patch('id')
    @HttpCode(200)
    async patch(@Param('id') id: string): Promise<IYarnModel> {
        return this.yarnService.patch(id);
    }
}
