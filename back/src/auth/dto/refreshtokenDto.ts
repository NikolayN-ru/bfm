import { IsString } from "class-validator";

export class RefreshTokenDto {
    @IsString({
        message: "You dont pass refreshtoken is not string!"
    })
    refreshToken: string;
}