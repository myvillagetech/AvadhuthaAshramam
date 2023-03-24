import { HttpStatus } from '@nestjs/common';
import { Res } from '@nestjs/common';
import { Put } from '@nestjs/common';
import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { BikhshaService } from './bikhsha.service';
import { CreateBikhshaDto } from './dto/create-bikhsha.dto';
import { UpdateBikhshaDto } from './dto/update-bikhsha.dto';

@Controller('bikhsha')
@ApiTags('bikhsha')
export class BikhshaController {
  constructor(private readonly bikhshaService: BikhshaService) {}

  @Post()
    async createBiksha(@Res() response, @Body() bikhshaDetails: CreateBikhshaDto) {
        try {
            const newBikhsha = await this.bikhshaService.createBikhsha(bikhshaDetails);
            return response.status(HttpStatus.CREATED).json({
                message: 'Bikhsha created successfully',
                success: true,
                newBikhsha,
            });
        } catch (error) {
            return response.status(HttpStatus.BAD_REQUEST).json({
                statusCode: 400,
                message: 'Error: Biksha not created!',
                error: error,
                success: false,
            });
        }
    }

    @Get()
    async getAllBikshas(@Res() response) {
        try {
            const bikhshaDetails = await this.bikhshaService.getAllBikhshas();
            return response.status(HttpStatus.CREATED).json({
                message: 'Bikhshas fetched successfully',
                success: true,
                bikhshaDetails,
            });
        } catch (error) {
            return response.status(HttpStatus.BAD_REQUEST).json({
                statusCode: 400,
                message: 'Error: Unable to fetch bikhshas!',
                error: error,
                success: false,
            });
        }
    }


    @Put('/:bikshaId')
    async updateBiksha(@Res() response, @Body() updateBikhshaDetails: UpdateBikhshaDto, @Param('bikshaId') bikshaId : string) {
        try {
            const bikhshaDetails = await this.bikhshaService.updateBikhshaById(bikshaId,updateBikhshaDetails);
            return response.status(HttpStatus.CREATED).json({
                message: 'Bikhsha updated successfully',
                success: true,
                bikhshaDetails,
            });
        } catch (error) {
            return response.status(HttpStatus.BAD_REQUEST).json({
                statusCode: 400,
                message: 'Error: Unable to update Biksha! Please Try Again!',
                error: error,
                success: false,
            });
        }
    }

}
