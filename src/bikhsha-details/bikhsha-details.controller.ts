import { HttpStatus } from '@nestjs/common';
import { Put } from '@nestjs/common';
import { Res } from '@nestjs/common';
import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { BikhshaDetailsService } from './bikhsha-details.service';
import { CreateBikhshaDetailDto } from './dto/create-bikhsha-detail.dto';
import { UpdateBikhshaDetailDto } from './dto/update-bikhsha-detail.dto';

@Controller('bikhsha-details')
@ApiTags('bikhsha-details')
export class BikhshaDetailsController {
  constructor(private readonly bikhshaDetailsService: BikhshaDetailsService) {}

  @Post()
    async createBiksha(@Res() response, @Body() bikhshaDetails: CreateBikhshaDetailDto) {
        try {
            const newBikhsha = await this.bikhshaDetailsService.createBikshaDetails(bikhshaDetails);
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
    async getBikshaDetails(@Res() response) {
        try {
            const bikhshaDetails = await this.bikhshaDetailsService.getBikhshaDetails();
            return response.status(HttpStatus.CREATED).json({
                message: 'Bikhsha details fetched successfully',
                success: true,
                bikhshaDetails,
            });
        } catch (error) {
            return response.status(HttpStatus.BAD_REQUEST).json({
                statusCode: 400,
                message: 'Error: Unable to fetch bikhsha!',
                error: error,
                success: false,
            });
        }
    }

    @Put('/:bikshaId')
    async updateBikshaDetails(@Res() response, @Body() updateBikhshaDetails: UpdateBikhshaDetailDto, @Param('bikshaId') bikshaId : string) {
        try {
            const bikhshaDetails = await this.bikhshaDetailsService.updateBikhsha(updateBikhshaDetails, bikshaId);
            return response.status(HttpStatus.CREATED).json({
                message: 'Bikhsha created successfully',
                success: true,
                bikhshaDetails,
            });
        } catch (error) {
            return response.status(HttpStatus.BAD_REQUEST).json({
                statusCode: 400,
                message: 'Error: Unable to updated Biksha! Please Try Again!',
                error: error,
                success: false,
            });
        }
    }

}
