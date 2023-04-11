import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { AxiosRequestConfig } from 'axios';
import { PaymentDto } from './dto/payment.dto';
import { v4 } from 'uuid';
import { firstValueFrom, lastValueFrom } from 'rxjs';

@Injectable()
export class PaymentGatewayService {
    constructor(private readonly httpService: HttpService) {}
    async create(paymentData: PaymentDto) {
        const expiryDate = new Date();
        expiryDate.setTime(expiryDate.getTime() + 60 * 60 * 1000);
        const formattedDate = expiryDate.toISOString();
        const data = {
            ...paymentData,
            link_id: v4(),
            link_expiry_time: formattedDate,
            link_meta: {
                return_url: 'http://localhost:4200/digilocker?link_id={link_id}'
            },
        };
        const requestConfig: AxiosRequestConfig = {
            headers: {
                accept: 'application/json',
                'x-client-id': 'TEST359349fdb7de93f2fbb7611a64943953',
                'x-client-secret':
                    'TEST2b972eb2e66af39aac591215d730ba601b8a0606',
                'x-api-version': '2022-09-01',
                'content-type': 'application/json',
            },
        };

        const result = await firstValueFrom(
            this.httpService.post(
                `https://sandbox.cashfree.com/pg/links`,
                data,
                requestConfig,
            ),
        );
        return result.data;
    }

    async getPaymentDetails(paymentId : string){

        const requestConfig: AxiosRequestConfig = {
            headers: {
                accept: 'application/json',
                'x-client-id': 'TEST359349fdb7de93f2fbb7611a64943953',
                'x-client-secret':
                    'TEST2b972eb2e66af39aac591215d730ba601b8a0606',
                'x-api-version': '2022-09-01',
                'content-type': 'application/json',
            },
        };
        const result = await firstValueFrom(
            this.httpService.get(
                `https://sandbox.cashfree.com/pg/links/${paymentId}/orders`,
                requestConfig,
            ),
        );
        return result.data;
    }
}
        