import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { BikhshaDetailsService } from './bikhsha-details.service';
import { CreateBikhshaDetailDto } from './dto/create-bikhsha-detail.dto';
import { UpdateBikhshaDetailDto } from './dto/update-bikhsha-detail.dto';

@Controller('bikhsha-details')
export class BikhshaDetailsController {
  constructor(private readonly bikhshaDetailsService: BikhshaDetailsService) {}

  @Post()
  create(@Body() createBikhshaDetailDto: CreateBikhshaDetailDto) {
    return this.bikhshaDetailsService.create(createBikhshaDetailDto);
  }

  @Get()
  findAll() {
    return this.bikhshaDetailsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.bikhshaDetailsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateBikhshaDetailDto: UpdateBikhshaDetailDto) {
    return this.bikhshaDetailsService.update(+id, updateBikhshaDetailDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.bikhshaDetailsService.remove(+id);
  }
}
