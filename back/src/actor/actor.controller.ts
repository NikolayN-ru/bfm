import { Body, Controller, Delete, Get, HttpCode, Param, Post, Put, Query, UsePipes, ValidationPipe } from '@nestjs/common';
import { ActorDto } from './actor.dto';
import { ActorService } from './actor.service';

@Controller('actors')
export class ActorController {
    
    constructor(private readonly actorService: ActorService) { }

    @Get('by-slug/:slug')
    async getProfile(@Param('slug') slug: string) {
        return this.actorService.bySlug(slug)
    }

    @Get()
    async getAll(@Query('searchTerm') searchTerm?: string) {
        return this.actorService.getAll(searchTerm);
    }

    @Get(':id')
    async get(@Param('id', ValidationPipe) id: string) {
        return this.actorService.byId(id);
    }

    // @UsePipes(new ValidationPipe())
    @Post()
    @HttpCode(200)
    async create() {
        return this.actorService.create();
    }

    @UsePipes(new ValidationPipe())
    @Put(':id')
    @HttpCode(200)
    async update(@Param('id', ValidationPipe) id: string, @Body() dto: ActorDto) {
        return this.actorService.update(id, dto);
    }

    @UsePipes(new ValidationPipe())
    @Delete(':id')
    @HttpCode(200)
    async delete(@Param('id', ValidationPipe) id: string) {
        return this.actorService.delete(id);
    }
}
