import { prop, Ref } from "@typegoose/typegoose";
import { Base, TimeStamps } from "@typegoose/typegoose/lib/defaultClasses";
import { CategoryModel } from "./category.model";
import { TagModel } from "./tag.model";

// export interface IYarnModel extends Base {}

export class VariablesYarn {
    @prop()
    number: string;

    @prop()
    color: string;

    @prop()
    count: number;

    @prop()
    image: string;
}

export class YarnModel {
    @prop({ unique: true })
    name: string;

    @prop({ ref: () => CategoryModel })
    category?: Ref<CategoryModel>[];

    @prop({ ref: () => TagModel })
    tags?: Ref<TagModel>[];

    @prop()
    length: number;

    @prop()
    wieght: number;

    @prop({ default: [] })
    needles: string[];

    @prop()
    country: string;

    @prop()
    description: string;

    @prop({ default: 0 })
    price: number;

    @prop()
    image: string;

    @prop()
    variables?: VariablesYarn[];
}
