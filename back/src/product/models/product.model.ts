import { prop, Ref } from '@typegoose/typegoose';
import { CategoryProdModel } from './categoryProd.model';

export class ProductModel {
  @prop()
  title: string;

  @prop()
  slug?: string;

  @prop({ default: true })
  active: boolean;

  @prop({ ref: () => CategoryProdModel })
  category?: Ref<CategoryProdModel>[];

  @prop()
  image: string[];

  @prop()
  description?: string;
}
