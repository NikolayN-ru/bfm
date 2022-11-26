import { Injectable, NotFoundException } from '@nestjs/common';
import { ModelType } from '@typegoose/typegoose/lib/types';
import { InjectModel } from 'nestjs-typegoose';
import { CategoryProdModel } from './models/categoryProd.model';

@Injectable()
export class ProductService {
  constructor(
    @InjectModel(CategoryProdModel)
    private readonly categoryProdModel: ModelType<CategoryProdModel>,
  ) {}

  //category-product
  async getAllCategory(): Promise<any[]> {
    return await this.categoryProdModel.find();
  }

  async createCategory(categoryProd: any): Promise<any> {
    return await this.categoryProdModel.create(categoryProd);
  }

  async getCategory(id: number): Promise<any> {
    const candidate = await this.categoryProdModel.findById(id);
    if (!candidate) {
      throw new NotFoundException('categoryProduct not found');
    }
    return candidate;
  }

  async updateCategory(categoryProd: any): Promise<any> {
    const updateCategory = await this.categoryProdModel
      .findByIdAndUpdate(categoryProd.id, categoryProd, {
        new: true,
      })
      .exec();
    if (!updateCategory) throw new NotFoundException('Genre not found');
    return updateCategory;
  }

  async deleteCategory(id: number): Promise<any> {
    return await this.categoryProdModel.findByIdAndDelete(id);
  }
}
