import { prop, Ref } from '@typegoose/typegoose';

export class CategoryProdModel {
  @prop()
  name: string;

  @prop()
  slug?: string;
}
