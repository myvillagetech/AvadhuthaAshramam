import {
    Controller,
    Get,
    Post,
    Body,
    Patch,
    Param,
    Delete,
    Res,
} from '@nestjs/common';
import { HttpStatus } from '@nestjs/common/enums';
import { ApiTags } from '@nestjs/swagger';
import { PaymentDto, mobilePaymentDto } from './dto/payment.dto';
import { PaymentGatewayService } from './payment-gateway.service';

@Controller('payment-gateway')
@ApiTags('payment')
export class PaymentGatewayController {
    constructor(
        private readonly paymentGatewayService: PaymentGatewayService,
    ) {}

    @Post()
    async create(@Body() paymentDto: PaymentDto, @Res() response) {
        try {
            const paymentDetails = await this.paymentGatewayService.create(
                paymentDto,
            );
            return response.status(HttpStatus.CREATED).json({
                message: 'Payment Link created Sucessfully',
                success: true,
                paymentDetails,
            });
        } catch (error) {
            return response.status(HttpStatus.BAD_REQUEST).json({
                statusCode: 400,
                message: 'Error: Payment link  not created!',
                error: error,
                success: false,
            });
        }
    }

    @Get('/paymentDetails/:id')
    async getPaymentDetails(@Res() response, @Param('id') paymentId: string,){
        try {
            const paymentDetails =
                await this.paymentGatewayService.getPaymentDetails(paymentId);
                console.log(paymentDetails);
            return response.status(HttpStatus.CREATED).json({
                message: 'Payment Details Fetched Sucessfully',
                success: true,
                paymentDetails,
            });
        } catch (error) {
            return response.status(HttpStatus.BAD_REQUEST).json({
                statusCode: 400,
                message: 'Error: Payment Details not found!',
                error: error,
                success: false,
            });
        }
    }

    @Post('/mobile')
    async mobilePayment(@Body() paymentDto: mobilePaymentDto, @Res() response) {
        try {
            const paymentDetails = await this.paymentGatewayService.mobilePayment(
                paymentDto,
            );
            return response.status(HttpStatus.CREATED).json({
                message: 'Payment Link created Sucessfully',
                success: true,
                paymentDetails,
            });
        } catch (error) {
            return response.status(HttpStatus.BAD_REQUEST).json({
                statusCode: 400,
                message: 'Error: Payment link  not created!',
                error: error,
                success: false,
            });
        }
    }
}
