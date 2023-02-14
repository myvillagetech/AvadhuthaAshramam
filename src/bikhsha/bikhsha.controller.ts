import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { BikhshaService } from './bikhsha.service';
import { CreateBikhshaDto } from './dto/create-bikhsha.dto';
import { UpdateBikhshaDto } from './dto/update-bikhsha.dto';

@Controller('bikhsha')
export class BikhshaController {
  constructor(private readonly bikhshaService: BikhshaService) {}

  // @Post()
  // create(@Body() createBikhshaDto: CreateBikhshaDto) {
  //   return this.bikhshaService.create(createBikhshaDto);
  // }

  // @Get()
  // findAll() {
  //   return this.bikhshaService.findAll();
  // }

  // @Get(':id')
  // findOne(@Param('id') id: string) {
  //   return this.bikhshaService.findOne(+id);
  // }

  // @Patch(':id')
  // update(@Param('id') id: string, @Body() updateBikhshaDto: UpdateBikhshaDto) {
  //   return this.bikhshaService.update(+id, updateBikhshaDto);
  // }

  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return this.bikhshaService.remove(+id);
  // }
}
