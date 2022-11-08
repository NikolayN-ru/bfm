import { IsString } from "class-validator";

export class ActorDto {
    @IsString()
    name: string;

    @IsString()
    category: string;

    @IsString()
    slug: string;

    @IsString()
    photo: string;
}