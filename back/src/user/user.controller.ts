import { Body, Controller, Get, HttpCode, Param, Patch, Post, Put, Query, UseGuards, UsePipes, ValidationPipe } from '@nestjs/common';
import { Types } from 'mongoose';
import { Auth } from 'src/auth/decorators/auth.decorator';
import { User } from './decorators/user.decorator';
import { UpdateUserDto } from './dto/updateUser.dto';
import { UserModel } from './user.model';
import { UserService } from './user.service';

@Controller('users')
export class UserController {
    constructor(private readonly userService: UserService) { }

    // @Auth()
    // async getProfile(@User('_id') _id: string) {
    @Get('profile/:id')
    async getProfile(@Param('id') id: string) {
        return this.userService.byId(id);
    }

    @UsePipes(new ValidationPipe())
    @Patch('profile/:id')
    @HttpCode(200)
    // @Auth()
    async updateProfile(@Param('id') id: string, @Body() dto: UpdateUserDto) {
        return this.userService.updateProfile(id, dto);
    }

    @Get('profile/favorites')
	// @Auth()
	async getFavorites(@User('_id') _id: string) {
		return this.userService.getFavoriteMovies(_id)
	}

	@Post('profile/favorites')
	@HttpCode(200)
	// @Auth()
	async toggleFavorite(
		@Body('movieId', ValidationPipe) movieId: Types.ObjectId,
		@User() user: UserModel
	) {
		return this.userService.toggleFavorite(movieId, user)
	}

    @Get('')
    async getAll(@Query('searchTerm') searchTerm?: string) {
        return this.userService.getAll(searchTerm);
    }

    @Get('count')
    async getCount() {
        return this.userService.getCount();
    }
}
