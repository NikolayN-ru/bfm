import { Injectable, NotFoundException } from '@nestjs/common';
import { ModelType } from '@typegoose/typegoose/lib/types';
import { InjectModel } from 'nestjs-typegoose';
import { CreateGenreDto } from './dto/createGenre.dto';
import { GenreModel } from './genre.model';

@Injectable()
export class GenreService {

    constructor(
        @InjectModel(GenreModel) private readonly GenreModel: ModelType<GenreModel>
    ) { }

    async bySlug(slug: string) {
        return this.GenreModel.findOne({ slug }).exec();
    }

    async getAll(searchTerm?: string) {
        let options = {}

        if (searchTerm) {
            options = {
                $or: [
                    {
                        name: new RegExp(searchTerm, 'i')
                    },
                    {
                        slug: new RegExp(searchTerm, 'i')
                    },
                    {
                        description: new RegExp(searchTerm, 'i')
                    },
                ]
            }
        }

        return this.GenreModel.find(options)
            .select('-updatedAT -__v')
            .sort({
                createdAt: 'desc'
            })
            .exec();
    }


    async getCollection() {
        // catalog genre
        const genres = await this.getAll();
        const collections = genres;
        return collections
    }
    // admin place

    async byId(_id: string) {
        const genre = await this.GenreModel.findById(_id);
        if (!genre) throw new NotFoundException(`Genre not found`);
        return genre;
    }

    async create() {
        const defaultValue: CreateGenreDto = {
            name: '',
            slug: '',
            description: '',
            icon: ''
        }
        // console.log(defaultValue, 'defaultValue') 
        const genre = await this.GenreModel.create(defaultValue);
        return genre._id;
    }

    async update(_id: string, dto: CreateGenreDto) {
        //отдаем новую версию жанра


        const updateGenre = await this.GenreModel.findByIdAndUpdate(_id, dto, {
            new: true
        }).exec();

        if(!updateGenre) throw new NotFoundException('Genre not found');
        return updateGenre;
    }

    async delete(id: string) {
        return this.GenreModel.findByIdAndDelete(id).exec();
    }
}
