import { IsString, MaxLength, MinLength } from "class-validator";

export class AuthDto {
    @IsString()
    email: string;

    @MinLength(6, {message: 'пароль не дожне быть меньше 6 символов'})
    @MaxLength(12, {message: 'пароль не должен быть больше 12 символов'})
    @IsString()
    password: string;
}