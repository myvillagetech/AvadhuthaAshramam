import { NotFoundException } from '@nestjs/common';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { MODEL_ENUMS } from 'src/shared/enums/model.enum';
import { CreateBikhshaDto } from './dto/create-bikhsha.dto';
import { UpdateBikhshaDto } from './dto/update-bikhsha.dto';
import { BikhshaDocument } from './schemas/bikhsha.schemas';

@Injectable()
export class BikhshaService {
  @InjectModel(MODEL_ENUMS.BIKHSHA) private bikhshaModel : Model<BikhshaDocument>
  async createBikhsha(createBikhshaDto: CreateBikhshaDto) {
     const bikhsha = await new this.bikhshaModel(createBikhshaDto);
     return bikhsha.save();
  }

  async getAllBikhshas() {
    const bikhsha = await this.bikhshaModel.find({});
    if (!bikhsha && bikhsha.length === 0) {
      throw new NotFoundException('Bikhsha Not Found');
    }
    return bikhsha
  }

  
}
