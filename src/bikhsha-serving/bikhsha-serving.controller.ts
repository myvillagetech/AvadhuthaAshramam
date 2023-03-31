import { Controller, Post, Body, Res, HttpStatus,Headers, Get, UseGuards } from '@nestjs/common';
import { ApiBearerAuth, ApiParam, ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guards';
import { BikhshaServingService } from './bikhsha-serving.service';
import { CreateBikhshaServingDto } from './dto/create-bikhsha-serving.dto';


@ApiTags('bikhsha-serving')
@Controller('bikhsha-serving')
@ApiBearerAuth('access-token')
@UseGuards(JwtAuthGuard)
export class BikhshaServingController {
    constructor(private readonly bikhshaServingService: BikhshaServingService) { }

    @Post()
    @ApiParam({
        name: 'Authorization',
        required: false,
        description:
            '(Leave empty. Use lock icon on the top-right to authorize)',
    })
    async createBiksha(@Res() response, @Body() bikhshaServingDetails: CreateBikhshaServingDto, @Headers('Authorization') authHeader: string,) {
        try {
            const newBikhshaForServing = await this.bikhshaServingService.createBikshaServe(bikhshaServingDetails,authHeader);
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

    @Get()
    @ApiParam({
        name: 'Authorization',
        required: false,
        description:
            '(Leave empty. Use lock icon on the top-right to authorize)',
    })
    async getAllBikhshaBookings(@Res() response, @Headers('Authorization') authHeader: string){
        try{
            const bikhshas = await this.bikhshaServingService.getAllBikhshaBookings(authHeader);
            return response.status(HttpStatus.CREATED).json({
                message: 'Bikhshas found successfully',
                success: true,
                bikhshas,
            });
        } catch(error){
            return response.status(HttpStatus.BAD_REQUEST).json({
                statusCode: 400,
                message: 'Error: Bikhsha serving not found!',
                error: error,
                success: false,
            });
        }
    }
}
