import { ConfigService } from '@nestjs/config';
import { TypegooseModuleOptions } from 'nestjs-typegoose';

export const getJWTConfig = async (configService: ConfigService): Promise<any> => ({
    secret: configService.get('JWT_SECRET')
})