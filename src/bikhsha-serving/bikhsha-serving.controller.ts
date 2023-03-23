import { Controller, Get, Post, Body, Patch, Param, Delete, Res, HttpStatus } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { BikhshaServingService } from './bikhsha-serving.service';
import { CreateBikhshaServingDto } from './dto/create-bikhsha-serving.dto';
import { UpdateBikhshaServingDto } from './dto/update-bikhsha-serving.dto';


@ApiTags('bikhsha-serving')
@Controller('bikhsha-serving')
export class BikhshaServingController {
    constructor(private readonly bikhshaServingService: BikhshaServingService) { }

    @Post()
    async createBiksha(@Res() response, @Body() bikhshaServingDetails: CreateBikhshaServingDto) {
        try {
            const newBikhshaForServing = await this.bikhshaServingService.createBikshaServe(bikhshaServingDetails);
            return response.status(HttpStatus.CREATED).json({
                message: 'Bikhsha serving created successfully',
                success: true,
                newBikhshaForServing,
            });
        } catch (error) {
            return response.status(HttpStatus.BAD_REQUEST).json({
                statusCode: 400,
                message: 'Error: Bikhsha serving not created!',
                error: error,
                success: false,
            });
        }
    }
}
