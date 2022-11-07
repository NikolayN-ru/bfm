import { CreateGenreDto } from './dto/createGenre.dto';
import { Body, Controller, Get, HttpCode, Param, Post, Put, Query, UsePipes, ValidationPipe } from '@nestjs/common';
import { Auth } from 'src/auth/decorators/auth.decorator';
import { User } from 'src/user/decorators/user.decorator';
import { GenreService } from './genre.service';

@Controller('genres')
export class GenreController {

    constructor(private readonly genreService: GenreService) {

    }

    @Get('by-slug/:slug')
    async getProfile(@Param('slug') slug: string) {
        return this.genreService.bySlug(slug)
    }

    @Get('/collections')
    async getCollections() {
        return this.genreService.getCollection()
    }

    @Get()
    async getAll(@Query('searchTerm') searchTerm?: string) {
        return this.genreService.getAll(searchTerm);
    }

    @Get(':id')
    async get(@Param('id', ValidationPipe) id: string) {
        return this.genreService.byId(id);
    }

    // @UsePipes(new ValidationPipe())
    @Post()
    @HttpCode(200)
    async create() {
        return this.genreService.create();
    }

    @UsePipes(new ValidationPipe())
    @Put(':id')
    @HttpCode(200)
    async update(@Param('id', ValidationPipe) id: string, @Body() dto: CreateGenreDto) {
        return this.genreService.update(id, dto);
    }

    @UsePipes(new ValidationPipe())
    @Put('profile')
    @HttpCode(200)
    async delete(@Param('id', ValidationPipe) id: string) {
        return this.genreService.delete(id);
    }

}
