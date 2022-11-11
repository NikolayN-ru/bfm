import { prop } from "@typegoose/typegoose";

export class TagModel {
    @prop()
    title: string;
}
