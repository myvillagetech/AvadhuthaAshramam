import { Injectable } from '@nestjs/common';
import { CreateBikhshaDetailDto } from './dto/create-bikhsha-detail.dto';
import { UpdateBikhshaDetailDto } from './dto/update-bikhsha-detail.dto';

@Injectable()
export class BikhshaDetailsService {
  create(createBikhshaDetailDto: CreateBikhshaDetailDto) {
    return 'This action adds a new bikhshaDetail';
  }

  findAll() {
    return `This action returns all bikhshaDetails`;
  }

  findOne(id: number) {
    return `This action returns a #${id} bikhshaDetail`;
  }

  update(id: number, updateBikhshaDetailDto: UpdateBikhshaDetailDto) {
    return `This action updates a #${id} bikhshaDetail`;
  }

  remove(id: number) {
    return `This action removes a #${id} bikhshaDetail`;
  }
}
