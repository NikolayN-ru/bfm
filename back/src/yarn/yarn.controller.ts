import { ITagModel } from './interface/tag.interface';
import { Body, Controller, Delete, Get, HttpCode, Param, Patch, Post, Put, UsePipes, ValidationPipe } from '@nestjs/common';
import { CategoryDto } from './dto/category.dto';
import { CreateYarnDto } from './dto/CreateYarn.dto';
import { YarnDto } from './dto/yarn.dto';
import { IYarnModel } from './interface/yarn.interface';
import { CategoryModel } from './models/category.model';
import { YarnService } from './yarn.service';
import { Types } from 'mongoose';
import { TagDto } from './dto/tag.dto';

@Controller('yarn')
export class YarnController {

    constructor(private readonly yarnService: YarnService) { }

    //TagController

    @Get('tag/all')
    async getTagsAll(): Promise<ITagModel[]> {
        return await this.yarnService.getTagsAll();
    }

    @Get('tag/:id')
    async getTag(@Param('id') id: string): Promise<ITagModel> {
        return await this.yarnService.getTag(id);
    }

    @Post('tag/')
    async createTag(): Promise<Types.ObjectId> {
        return await this.yarnService.createTag();
    }

    // @Put('tag/:id')
    @Put('tag')
    // async updateTag(@Param('id') id: string, @Body() dto: TagDto): Promise<any> {
    async updateTag(@Body() dto: any): Promise<any> {
        // return await this.yarnService.updateTag(id, dto);
        return await this.yarnService.updateTag(dto);
    }

    @Delete('tag/:id')
    async deleteTag(@Param('id') id: string): Promise<any> {
        return await this.yarnService.deleteTag(id);
    }

    //CategoryController
    @Get('category/statistics')
    async getCategoryStatistics(): Promise<any> {
        return await this.yarnService.getCategoryStatistics();
    }


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

    // @UsePipes(new ValidationPipe())
    // @Put('new/:id')
    @Put('new')
    // async updateYarn(@Param('id') id: string, @Body() dto: YarnDto): Promise<any> {
    async updateYarn(@Body() dto: any): Promise<any> {
        // return this.yarnService.updateYarnItem(id, dto);
        // console.log(dto, 'dto')
        return this.yarnService.updateYarnItem(dto);
    }

    @Get('all')
    @HttpCode(200)
    async getAll(): Promise<IYarnModel[]> {
        return this.yarnService.getAll();
    }

    @Get(':id')
    async getId(@Param('id') id: string): Promise<IYarnModel> {
        return this.yarnService.getById(id);
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
