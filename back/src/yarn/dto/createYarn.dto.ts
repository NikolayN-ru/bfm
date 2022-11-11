import { IsString, MaxLength, MinLength } from "class-validator";

export class CreateYarnDto {
    @MinLength(3, {
        message: 'имя_продукта не должно быть меньше 3 символов'
    })
    @IsString()
    name: string;

    @IsString()
    category: string;

    slug?: string;

    @IsString()
    mainImage?: string;

    // @IsArray()
    variables?: [];
    
    // @IsArray()
    tags?: [];
}