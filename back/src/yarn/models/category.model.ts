import { prop } from "@typegoose/typegoose";

export class CategoryModel {
    @prop()
    title: string;

    @prop()
    slug?: string;

    @prop()
    description?: string;
}
