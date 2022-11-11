import { IsObject } from 'class-validator';
import { Injectable, NotFoundException } from '@nestjs/common';
import { ModelType } from '@typegoose/typegoose/lib/types';
import { genSalt, hash } from 'bcryptjs';
import { InjectModel } from 'nestjs-typegoose';
import { UpdateUserDto } from './dto/updateUser.dto';
import { UserModel } from './user.model';
import { Types } from 'mongoose';

@Injectable()
export class UserService {

    constructor(@InjectModel(UserModel) private readonly userModel: ModelType<UserModel>) { }

    async byId(_id: string) {
        if (_id.length != 24) throw new NotFoundException('id not be 24 characters');
        const user = await this.userModel.findById(_id);
        if (!user) throw new NotFoundException('User not found');
        return user;
    }

    async updateProfile(_id: string, dto: UpdateUserDto) {
        const user = await this.byId(_id);
        const isSameUser = await this.userModel.findOne({ email: dto.email });

        if (isSameUser && String(_id) != String(isSameUser._id)) {
            throw new NotFoundException('Email busy');
        }

        if (dto.password) {
            const salt = await genSalt(10);
            user.password = await hash(dto.password, salt);
        }

        user.email = dto.email;
        if (dto.isAdmin || dto.isAdmin === false) {
            user.isAdmin = dto.isAdmin;
        }

        await user.save();
        return user;
    }

    async getCount(): Promise<number> {
        return this.userModel.find().count().exec();
    }

    async getAll(searchTerm?: string): Promise<UserModel[]> {
        let options = {}
        if (searchTerm) {
            options = {
                $or: [
                    {
                        email: new RegExp(searchTerm, 'i')
                    }
                ]
            }
        }
        return this.userModel.find(options).select('-password -updatedAt -__v').sort({
            createdAt: 'desc'
        }).exec();
    }

    async delete(id: string) {
        return this.userModel.findByIdAndDelete(id).exec();
    }

    async toggleFavorite(movieId: Types.ObjectId, user: UserModel) {
        const { _id, favorites } = user;
        await this.userModel.findByIdAndUpdate(_id, {
            favorites: favorites.includes(movieId) ? favorites.filter(id => String(id) !== String(movieId)) : [...favorites, movieId],
        })
    }

    async getFavoriteMovies(_id: string) {
        return this.userModel
            .findById(_id, 'favorites')
            .populate({
                path: 'favorites',
                populate: {
                    path: 'genres',
                },
            })
            .exec()
            .then((data) => {
                return data.favorites
            })
    }
}
