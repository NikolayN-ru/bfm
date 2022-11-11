import { Body, Controller, Get, HttpCode, Param, Post, Put, Query, UsePipes, ValidationPipe } from '@nestjs/common';
import { Types } from 'mongoose';
import { MovieService } from './movie.service';
import { UpdateMovieDto } from './update-movie.dto';

@Controller('movies')
export class MovieController {

    constructor(private readonly movieService: MovieService) { }

    @Get('by-slug/:slug')
    async getProfile(@Param('slug') slug: string) {
        return this.movieService.bySlug(slug)
    }

    @Get('by-actor/:actorId')
    async byActor(@Param('actorId') actorId: Types.ObjectId) {
        return this.movieService.byActor(actorId)
    }

    @Post('by-genres')
    @HttpCode(200)
    async byGenres(@Body('genresIds') genresIds: Types.ObjectId[]) {
        return this.movieService.byGenres(genresIds)
    }

    @Get()
    async getAll(@Query('searchTerm') searchTerm?: string) {
        return this.movieService.getAll(searchTerm);
    }

    @Get('most-popular')
    async getMostPopular() {
        return this.movieService.getMostPopular();
    }

    @Put('update-count-opened')
    @HttpCode(200)
    async updateCountOpened(@Body('slug') slug: string) {
        return this.movieService.updateCountOpened(slug);
    }

    @Get(':id')
    async get(@Param('id', ValidationPipe) id: string) {
        return this.movieService.byId(id);
    }

    // @UsePipes(new ValidationPipe())
    @Post()
    @HttpCode(200)
    async create() {
        return this.movieService.create();
    }

    @UsePipes(new ValidationPipe())
    @Put(':id')
    @HttpCode(200)
    async update(@Param('id', ValidationPipe) id: string, @Body() dto: UpdateMovieDto) {
        return this.movieService.update(id, dto);
    }

    @UsePipes(new ValidationPipe())
    @Put('profile')
    @HttpCode(200)
    async delete(@Param('id', ValidationPipe) id: string) {
        return this.movieService.delete(id);
    }

}
