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
            }).populate('genres actors')
            // .populate('actors genres')

            .exec();
    }

    async bySlug(slug: string) {
        const doc = await this.movieModel.findOne({ slug }).populate('actors genres').exec();
        if (!doc) throw new NotFoundException(`Movie not found ${slug}`);
        return doc;
    }

    async byActor(actorId: Types.ObjectId) {
        const docs = await this.movieModel.find({ actors: actorId }).exec();
        if (!docs) throw new NotFoundException(`Movies not found movie`);
        return docs;
    }

    async byGenres(genreIds: Types.ObjectId[]) {
        const docs = await this.movieModel.findOne({ genres: { $in: genreIds } }).exec();
        if (!docs) throw new NotFoundException(`Movies not found movie`);
        return docs;
    }

    async updateCountOpened(slug: string) {
        const updateDoc = await this.movieModel.findOneAndUpdate({ slug }, {
            $inc: { conutCppened: 1 },

        },
            {
                new: true
            }
        ).exec();
        if (!updateDoc) throw new NotFoundException('Movie not found');
        return updateDoc;
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
        const movie = await this.movieModel.create(defaultValue);
        return movie._id;
    }

    async update(_id: string, dto: UpdateMovieDto) {
        // telegram natification
        const updateActor = await this.movieModel.findByIdAndUpdate(_id, dto, {
            new: true
        }).exec();

        if (!updateActor) throw new NotFoundException('Genre not found');
        return updateActor;
    }

    async delete(id: string) {
        const deleteDoc = this.movieModel.findByIdAndDelete(id).exec();
        if (!deleteDoc) throw new NotFoundException('Movie not found');
        return deleteDoc;
    }

    async getMostPopular() {
        return await this.movieModel.findOne({ conutCppened: { $gt: 0 } }).sort({ countOpened: -1 }).populate('genres').exec()
        // if (!doc) throw new NotFoundException('Movie not found');
        // return doc;
    }
}
