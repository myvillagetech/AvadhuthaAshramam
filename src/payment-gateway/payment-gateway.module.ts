import { Module } from '@nestjs/common';
import { PaymentGatewayService } from './payment-gateway.service';
import { PaymentGatewayController } from './payment-gateway.controller';
import { HttpModule } from '@nestjs/axios';

@Module({
  imports : [HttpModule],
  controllers: [PaymentGatewayController],
  providers: [PaymentGatewayService]
})
export class PaymentGatewayModule {}
