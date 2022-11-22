import { Body, Controller, Delete, HttpCode, HttpStatus, Post, Query, UploadedFile, UseInterceptors } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { request } from 'http';
import { FileService } from './file.service';

@Controller('files')
export class FileController {
    constructor(private readonly fileService: FileService) { }

    @Post()
    @HttpCode(200)
    @UseInterceptors(FileInterceptor('fileData'))
    async uploadFile(@UploadedFile() file: Express.Multer.File, @Query('folder') folder?: string) {
        // console.log(folder, file)
        return this.fileService.saveFiles([file], folder);
    }

    @Delete()
    @HttpCode(200)
    async deleteFile() {
        return
    }

    @Post('delete')
    @HttpCode(200)
    async removeFile(@Body('file') file: string){
        console.log(file, 'file')
        return this.fileService.removeFile(file);
    }
}
