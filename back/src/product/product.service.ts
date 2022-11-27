import { Injectable, NotFoundException } from '@nestjs/common';
import { ModelType } from '@typegoose/typegoose/lib/types';
import { InjectModel } from 'nestjs-typegoose';
import { CategoryProdModel } from './models/categoryProd.model';
import { ProductModel } from './models/product.model';

@Injectable()
export class ProductService {
  constructor(
    @InjectModel(CategoryProdModel)
    private readonly categoryProdModel: ModelType<CategoryProdModel>,
    @InjectModel(ProductModel)
    private readonly product: ModelType<ProductModel>,
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

  //product
  async getAllProduct(): Promise<any[]> {
    return await this.product.find().populate('category').sort({ _id: -1 });
  }

  async createProduct(product: any): Promise<any> {
    return await this.product.create(product);
  }

  async getProduct(id: number): Promise<any> {
    const candidate = await this.product.findById(id);
    if (!candidate) throw new NotFoundException('product not found');
    return candidate;
  }

  async updateProduct(id:number, product: any): Promise<any> {
    const updateProduct = await this.product
      .findByIdAndUpdate(product.id, product, {
        new: true,
      })
      .exec();
    if (!updateProduct) throw new NotFoundException('product not found');
    return updateProduct;
  }

  async deleteProduct(id: number): Promise<any> {
    return await this.product.findByIdAndDelete(id);
  }
}
