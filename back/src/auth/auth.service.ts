import { BadRequestException, Injectable, UnauthorizedException, ValidationPipe } from '@nestjs/common';
import { ModelType } from '@typegoose/typegoose/lib/types';
import { InjectModel } from 'nestjs-typegoose';
import { UserModel } from 'src/user/user.model';
import { AuthDto } from './dto/auth.dto';
import { hash, genSalt, compare } from 'bcryptjs';
import { JwtService } from '@nestjs/jwt';
import { RefreshTokenDto } from './dto/refreshtokenDto';

@Injectable()
export class AuthService {
    constructor(
        @InjectModel(UserModel) private readonly UserModel: ModelType<UserModel>,
        private readonly jwtService: JwtService,
    ) { }

    async login(dto: AuthDto) {
        const user = await this.validateUser(dto)
        // return this.validateUser(dto)
        const tokens = await this.issueTokenPair(String(user._id))
        return {
            user: this.returnUserFields(user),
            ...tokens
        }
    }

    async getNewTokens({ refreshToken }: RefreshTokenDto) {
        if (!refreshToken) throw new UnauthorizedException("Refresh sign in!");
        // распечатываем токен и проверяем нащ токен или не наш
        const result = await this.jwtService.verifyAsync(refreshToken)
        if (!result) throw new UnauthorizedException("INVALID TOKEN ON axpire")
        const user = await this.UserModel.findById(result._id)
        const tokens = await this.issueTokenPair(String(user._id))

        return {
            user: this.returnUserFields(user),
            ...tokens
        }
    }

    async register(dto: AuthDto) {
        const oldUser = await this.UserModel.findOne({ email: dto.email });
        if (oldUser) {
            throw new BadRequestException('такой пользователь(Email) уже есть в системе')
        }
        const salt = await genSalt(10);
        const newUser = new this.UserModel({
            email: dto.email,
            password: await hash(dto.password, salt),
        })
        const user = await newUser.save();
        const tokens = await this.issueTokenPair(String(user._id))
        return {
            user: this.returnUserFields(user),
            ...tokens
        }
    }

    async validateUser(dto: AuthDto): Promise<UserModel> {
        const user = await this.UserModel.findOne({ email: dto.email });
        if (!user) throw new UnauthorizedException('User not found');
        const isValidPassword = await compare(dto.password, user.password);
        if (!isValidPassword) throw new UnauthorizedException('Password in not valid password');
        return user;
    }

    async issueTokenPair(userId: string) {
        const data = { _id: userId };

        const refreshToken = await this.jwtService.signAsync(data, {
            expiresIn: '15d'
        })

        const accessToken = await this.jwtService.signAsync(data, {
            expiresIn: '1h'
        })

        return { refreshToken, accessToken };
    }

    returnUserFields(user: UserModel) {
        return {
            _id: user.id,
            email: user.email,
            isAdmin: user.isAdmin
        }
    }
}

