import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { MODEL_ENUMS } from 'src/shared/enums/model.enum';
import { CreateBikhshaServingDto } from './dto/create-bikhsha-serving.dto';
import { UpdateBikhshaServingDto } from './dto/update-bikhsha-serving.dto';
import { BikhshaServingDocument } from './schemas/bikhsha-serving.schema';

@Injectable()
export class BikhshaServingService {
  @InjectModel(MODEL_ENUMS.BIKHSHA_SERVING_MODEL) private bikhshaServingModel : Model<BikhshaServingDocument>
  async createBikshaServe(createBikhshaServingDto: CreateBikhshaServingDto) {
     const bikhsha = await new this.bikhshaServingModel(createBikhshaServingDto);
     return bikhsha.save();
  }

  // createBikshaServe
  findAll() {
    return `This action returns all bikhshaServing`;
  }

  findOne(id: number) {
    return `This action returns a #${id} bikhshaServing`;
  }

  update(id: number, updateBikhshaServingDto: UpdateBikhshaServingDto) {
    return `This action updates a #${id} bikhshaServing`;
  }

  remove(id: number) {
    return `This action removes a #${id} bikhshaServing`;
  }
}
