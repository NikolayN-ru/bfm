import { FileResponse } from './file.interface';
import { Injectable } from '@nestjs/common';
import { ensureDir, writeFile } from 'fs-extra';
import { path } from 'app-root-path';
import * as Path from 'path';
import * as fs from 'fs';

@Injectable()
export class FileService {
    async saveFiles(files: Express.Multer.File[], folder: string = 'default'): Promise<FileResponse[]> {
        // console.log(files, 'files');
        const uploadFolder = `${path}/uploads/${folder}`
        await ensureDir(uploadFolder)
        const res: FileResponse[] = await Promise.all(
            files.map(async file => {
                await writeFile(`${uploadFolder}/${file.originalname}`, file.buffer)
                return {
                    url: `/uploads/${folder}/${file.originalname}`,
                    name: file.originalname,
                }
            })
        )
        return res;
    }

    removeFile(fileName: string) {
        const fileDir = fileName.split('/')[2]
        const fileNameMain = fileName.split('/')[3]
        const filePath = Path.resolve(__dirname, '../..', 'uploads', `${fileDir}`, `${fileNameMain}`)
        fs.unlink(filePath, err => {
            if (err) {
                console.log('неудалось удалить файл', err);
            } else {
                console.log('Файл успешно удалён');
            }
        });
    }
}
