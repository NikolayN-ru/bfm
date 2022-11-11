import { IsArray, IsNumber, IsObject, IsString, MinLength } from "class-validator";

export class VariablesYarn {
    @IsNumber()
    number: string;

    @IsNumber()
    color: string;

    @IsNumber()
    count: number;

    @IsString()
    image: string;
}

export class YarnDto {
    @IsString()
    name?: string;

    @IsArray()
    @IsString({ each: true })
    category?: string[];

    @IsArray()
    @IsString({ each: true })
    tags?: string[];

    @IsNumber()
    length?: number;

    @IsNumber()
    wieght?: number;

    @IsArray()
    needles?: string | number[];

    @IsString()
    country?: string;

    @IsString()
    description: string;

    @IsNumber()
    price?: number

    @IsString()
    image?: string;

    @IsArray()
    variables?: VariablesYarn[];
}