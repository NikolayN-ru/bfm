import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { ProductService } from './product.service';

@Controller('product')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  //category-product
  @Get('category/all')
  async getAllCategory(): Promise<any> {
    return await this.productService.getAllCategory();
  }

  @Post('category')
  async createCategory(@Body() categoryProd: any): Promise<any> {
    return await this.productService.createCategory(categoryProd);
  }

  @Get('category/:id')
  async getCategory(@Param('id') id: number): Promise<any> {
    return await this.productService.getCategory(id);
  }

  @Put('category')
  async updateCategory(@Body() categoryProd: any): Promise<any> {
    return await this.productService.updateCategory(categoryProd);
  }

  @Delete('category/:id')
  async deleteCategory(@Param('id') id: number): Promise<any> {
    return await this.productService.deleteCategory(id);
  }

  //   product
  @Get('all')
  async getAll(): Promise<any> {
    return await this.productService.getAllProduct();
  }

  @Post()
  async create(@Body() categoryProd: any): Promise<any> {
    return await this.productService.createProduct(categoryProd);
  }

  @Get(':id')
  async get(@Param('id') id: number): Promise<any> {
    return await this.productService.getProduct(id);
  }

  @Put(':id')
  async update(
    @Param('id') id: number,
    @Body() categoryProd: any,
  ): Promise<any> {
    return await this.productService.updateProduct(id, categoryProd);
  }

  @Delete(':id')
  async delete(@Param('id') id: number): Promise<any> {
    return await this.productService.deleteProduct(id);
  }
}
