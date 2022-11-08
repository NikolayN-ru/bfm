import { Injectable, NotFoundException } from '@nestjs/common';
import { ModelType } from '@typegoose/typegoose/lib/types';
import { InjectModel } from 'nestjs-typegoose';
import { UpdateMovieDto } from './update-movie.dto';
import { MovieModel } from './movie.model';
import { Types } from 'mongoose';

@Injectable()
export class MovieService {

    constructor(@InjectModel(MovieModel) private readonly movieModel: ModelType<MovieModel>) { }

    async getAll(searchTerm?: string) {
        let options = {}

        if (searchTerm) {
            options = {
                $or: [
                    {
                        title: new RegExp(searchTerm, 'i')
                    },
                ]
            }
        }

        return this.movieModel.find(options)
            .select('-updatedAT -__v')
            .sort({
                createdAt: 'desc'
            }).populate('actors genres')
            .exec();
    }

    async bySlug(slug: string) {
        const doc = await this.movieModel.findOne({ slug }).populate('actors genres').exec();
        if (!doc) throw new NotFoundException(` not found ${slug}`);
        return doc
    }

    async byActor(actorId: string) {
        const doc = await this.movieModel.findOne({ actors: actorId }).exec();
        if (!doc) throw new NotFoundException(` not found movie`);
        return doc
    }

    async byGenres(genreIds: Types.ObjectId[]) {
        const docs = await this.movieModel.findOne({ genres: { $in: genreIds } }).exec();
        if (!docs) throw new NotFoundException(` not found movie`);
        return docs
    }

    async updateCountOpened(slug: string) {
        //отдаем новую версию actor
        const updateActor = await this.movieModel.findOneAndUpdate({ slug }, {
            $inc: { conutCppened: 1 }
        }).exec();

        if (!updateActor) throw new NotFoundException('Genre not found');
        return updateActor;
    }

    async getCollection() {
        // catalog genre
        const actors = await this.getAll();
        const collections = actors;
        return collections
    }
    // admin place

    async byId(_id: string) {
        const movie = await this.movieModel.findById(_id);
        if (!movie) throw new NotFoundException(`Genre not found`);
        return movie;
    }

    async create() {
        const defaultValue: UpdateMovieDto = {
            bigPoster: '',
            actors: [],
            genres: [],
            description: '',
            poster: '',
            title: '',
            videoUrl: '',
            slug: ''
        }
        // console.log(defaultValue, 'defaultValue') 
        const movie = await this.movieModel.create(defaultValue);
        return movie._id;
    }

    async update(_id: string, dto: UpdateMovieDto) {
        //отдаем новую версию actor
        const updateActor = await this.movieModel.findByIdAndUpdate(_id, dto, {
            new: true
        }).exec();

        if (!updateActor) throw new NotFoundException('Genre not found');
        return updateActor;
    }

    async delete(id: string) {
        return this.movieModel.findByIdAndDelete(id).exec();
    }

    async getMostPopular(slug: string){
        const doc = await this.movieModel.findOne({slug})
    }

}

