import { IsString } from "class-validator";

export class UpdateUserDto {
    @IsString()
    email: string;

    @IsString()
    password: string;

    isAdmin: boolean;
}