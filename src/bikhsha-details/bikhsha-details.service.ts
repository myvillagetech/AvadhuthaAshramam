import { NotFoundException } from '@nestjs/common';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { MODEL_ENUMS } from 'src/shared/enums/model.enum';
import { CreateBikhshaDetailDto } from './dto/create-bikhsha-detail.dto';
import { UpdateBikhshaDetailDto } from './dto/update-bikhsha-detail.dto';
import { BikhshaDetailsDocument } from './schemas/biksha-details.schemas';

@Injectable()
export class BikhshaDetailsService {
  @InjectModel(MODEL_ENUMS.BIKHSHA_DETAILS) private bikhshaDetailsModel : Model<BikhshaDetailsDocument>
  async createBikshaDetails(createBikhshaDetailDto: CreateBikhshaDetailDto) {
    const details = await new this.bikhshaDetailsModel(createBikhshaDetailDto);
    return details.save();
  }

  async getBikhshaDetails() {
    const bikhsha = await this.bikhshaDetailsModel.find({});
    if (!bikhsha && bikhsha.length === 0) {
      throw new NotFoundException('Bikhsha Not Found');
    }
    return bikhsha
  }

  async updateBikhsha(bikhshaDetails : UpdateBikhshaDetailDto, BikhshaId : string) {
    const bikhsha = await this.bikhshaDetailsModel.findByIdAndUpdate(BikhshaId,bikhshaDetails,{new : true});

    if (!bikhsha) {
      throw new NotFoundException(`Bikhsha with #${BikhshaId} not found`);
    }
    return bikhsha;
    
  }

  async deleteBikhsha(BikhshaId : string) {
    const bikhsha = await this.bikhshaDetailsModel.findByIdAndDelete(BikhshaId);

    if (!bikhsha) {
      throw new NotFoundException(`Bikhshs with #${BikhshaId} not found`);
    }
    return bikhsha;
    
  }
}
