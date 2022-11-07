import { Injectable } from '@nestjs/common';
import { InjectModel } from 'nestjs-typegoose';

@Injectable()
export class AuthService {

    contructor(@InjectModel(UseModel) private readonly UserModel: ModelType<UserModel>){}

    async register(dto: any){
        return this.
    }
}
