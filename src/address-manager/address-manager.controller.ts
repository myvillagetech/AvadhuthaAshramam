import {
    Controller,
    Get,
    Post,
    Body,
    Patch,
    Param,
    Delete,
    UseGuards,
    Headers,
    Res,
    HttpStatus,
    Put
} from '@nestjs/common';
import { AddressManagerService } from './address-manager.service';
import { CreateAddressManagerDto } from './dto/create-address-manager.dto';
import { UpdateAddressManagerDto } from './dto/update-address-manager.dto';
import { ApiBearerAuth, ApiParam, ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guards';
import { Query } from 'mongoose';

@Controller('address-manager')
@ApiBearerAuth('access-token')
@UseGuards(JwtAuthGuard)
@ApiTags('address-manager')
export class AddressManagerController {
    constructor(
        private readonly addressManagerService: AddressManagerService,
    ) {}

    @Post()
    @ApiParam({
        name: 'Authorization',
        required: false,
        description:
            '(Leave empty. Use lock icon on the top-right to authorize)',
    })
    async addAddress(@Res() response, @Headers('Authorization') authHeader: string, @Body() createAddressManagerDto: CreateAddressManagerDto) {
      try{
        const address = await this.addressManagerService.addAddress(createAddressManagerDto,authHeader)
        return response.status(HttpStatus.CREATED).json({
          message : 'Address added successfully',
          success: true,
          address
        })
      } catch(error){
        return response.status(HttpStatus.BAD_REQUEST).json({
          statusCode: 400,
          message: 'Unable to add address',
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
    async getAllAddress(@Res() response, @Headers('Authorization') authHeader: string) {
      try{
        const address = await this.addressManagerService.getAllAddress(authHeader)
        return response.status(HttpStatus.OK).json({
          message : 'Addresses Fetched successfully',
          success: true,
          address
        })
      } catch(error){
        return response.status(HttpStatus.BAD_REQUEST).json({
          statusCode: 400,
          message: 'Unable fetch address',
          error: error,
          success: false,
      });
      }
    }

    @Put('/:addressId')
    @ApiParam({
        name: 'Authorization',
        required: false,
        description:
            '(Leave empty. Use lock icon on the top-right to authorize)',
    })
    async updateAddress(@Param('addressId') addressId : string, @Res() response, @Body() addressDetails: UpdateAddressManagerDto) {
      try{
        const address = await this.addressManagerService.updateAddress(addressId,addressDetails)
        return response.status(HttpStatus.OK).json({
          message : 'Address updated successfully',
          success: true,
          address
        })
      } catch(error){
        return response.status(HttpStatus.BAD_REQUEST).json({
          statusCode: 400,
          message: 'Unable to update address',
          error: error,
          success: false,
      });
      }
    }

    @Delete('/:addressId')
    @ApiParam({
        name: 'Authorization',
        required: false,
        description:
            '(Leave empty. Use lock icon on the top-right to authorize)',
    })
    async deleteAddress(@Param('addressId') addressId : string, @Res() response) {
      try{
        const address = await this.addressManagerService.deleteAddress(addressId)
        return response.status(HttpStatus.CREATED).json({
          message : 'Address deleted successfully',
          success: true,
          address
        })
      } catch(error){
        return response.status(HttpStatus.BAD_REQUEST).json({
          statusCode: 400,
          message: 'Unable to delete address',
          error: error,
          success: false,
      });
      }
    }

    
}
