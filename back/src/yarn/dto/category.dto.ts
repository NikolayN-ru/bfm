import { IsString } from "class-validator";

export class CategoryDto {
    @IsString()
    title: string;

    @IsString()
    slug?: string;

    @IsString()
    description?: string;

    @IsString()
    id?: string;
}