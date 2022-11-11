import { Injectable, NotFoundException } from '@nestjs/common';
import { ModelType } from '@typegoose/typegoose/lib/types';
import { InjectModel } from 'nestjs-typegoose';
import { CreateYarnDto } from './dto/CreateYarn.dto';
import { YarnDto } from './dto/yarn.dto';
import { IYarnModel } from './interface/yarn.interface';
import { YarnModel } from './models/yarn.model';
import { CategoryModel } from './models/category.model';
import { ICategoryModel } from './interface/category.interface';
import { CategoryDto } from './dto/category.dto';
import { Types } from 'mongoose';

@Injectable()
export class YarnService {
    constructor(
        @InjectModel(YarnModel) private readonly yarnModel: ModelType<IYarnModel>,
        @InjectModel(CategoryModel) private readonly categoryModel: ModelType<ICategoryModel>
    ) { }

    //CategoryService

    async categoryAdd(): Promise<Types.ObjectId> {
        const defaultValue: CategoryDto = {
            title: '',
            slug: '',
            description: '',
        }
        const genre = await this.categoryModel.create(defaultValue);
        return genre._id;
    }

    async categoryUpload(_id: string, dto: CategoryDto) {
        const updateCategory = await this.categoryModel.findByIdAndUpdate(_id, dto, {
            new: true
        }).exec();
        if (!updateCategory) throw new NotFoundException('Genre not found');
        return updateCategory;
    }

    async categoryAllAgregate() {
        let options = {};
        return this.categoryModel.aggregate().match(options).lookup({
            from: "Yarn",
            localField: "_id",
            foreignField: "category",
            as: "YarnItem"
        }).exec();
    }

    //YarnService

    // async addYarnItem(dto: CreateYarnDto): Promise<IYarnModel> {
    // const newItem = new this.yarnModel({ ...dto });
    // return newItem.save();
    // }

    async addYarnItem(): Promise<Types.ObjectId> {
        const defaultValue: YarnModel = {
            name: '',
            category: [],
            tags: [],
            length: 0,
            wieght: 0,
            needles: [],
            country: '',
            description: '',
            price: 0,
            image: '',
        }
        const yarnItem = await this.yarnModel.create(defaultValue);
        return yarnItem._id;
    }

    async updateYarnItem(_id: string, dto: YarnDto): Promise<any> {
        const updateYarnItem = await this.yarnModel.findByIdAndUpdate(_id, dto, {
            new: true
        }).exec();
        if (!updateYarnItem) throw new NotFoundException('Genre not found');
        return updateYarnItem;
    }

    async getAll(): Promise<IYarnModel[]> {
        return this.yarnModel.find().populate('category')
    }

    async delete(id: string): Promise<IYarnModel> {
        return this.yarnModel.findByIdAndDelete(id)
    }

    async patch(id: string): Promise<IYarnModel> {
        const candidate = await this.yarnModel.findById(id)
        return candidate
    }
}
