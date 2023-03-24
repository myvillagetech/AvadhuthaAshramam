import { PartialType } from '@nestjs/swagger';
import { CreateBikhshaServingDto } from './create-bikhsha-serving.dto';

export class UpdateBikhshaServingDto extends PartialType(CreateBikhshaServingDto) {}
