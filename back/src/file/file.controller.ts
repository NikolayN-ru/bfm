import { Controller, Delete, HttpCode, HttpStatus, Post, Query, UploadedFile, UseInterceptors } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { FileService } from './file.service';

@Controller('files')
export class FileController {
    constructor(private readonly fileService: FileService) { }

    @Post()
    @HttpCode(200)
    @UseInterceptors(FileInterceptor('file'))
    async uploadFile(@UploadedFile() file: Express.Multer.File, @Query('folder') folder?: string) {
        return this.fileService.saveFiles([file], folder);
    }

    @Delete()
    @HttpCode(200)
    async deleteFile() {
        return
    }
}
