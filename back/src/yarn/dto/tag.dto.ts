import { IsArray, IsNumber, IsObject, IsString, MinLength } from "class-validator";

export class TagDto {
    @IsString()
    title: string;

}