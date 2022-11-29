import { prop } from "@typegoose/typegoose";

export class Item {
    @prop()
    title: string;

    @prop()
    image: string;

    @prop()
    color: string;

    @prop()
    count: number;

    @prop()
    price: number;
}

export class OrderModel {
    @prop()
    number: string;

    @prop()
    date: string;

    @prop()
    status: string;

    @prop()
    name: string;

    @prop()
    surname: string;

    @prop()
    patronymic: string;

    @prop()
    zipcode: string;

    @prop()
    region: string;
    
    @prop()
    city: string;

    @prop()
    addres: string;

    @prop()
    phone: string;

    @prop()
    email: string;

    @prop()
    message: string;

    @prop()
    positions?: Item[];

    @prop({default: 0})
    totalPrice: number;

    @prop()
    delivery: string;

    @prop()
    payment: string;
}