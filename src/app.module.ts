import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';
import { MongooseModule } from '@nestjs/mongoose';
import { MONGO_KEYS } from './config/keys.config';
import { ConfigModule } from '@nestjs/config';
import { RoomModule } from './room/room.module';
import { BooksModule } from './books/books.module';
import { BikhshaModule } from './bikhsha/bikhsha.module';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
import { BooksCartModule } from './books-cart/books-cart.module';
import { BooksOrderModule } from './books-order/books-order.module';
import { BikhshaServingModule } from './bikhsha-serving/bikhsha-serving.module';
import { RoomTypesModule } from './room-types/room-types.module';
import { PaymentGatewayModule } from './payment-gateway/payment-gateway.module';
import { AddressManagerModule } from './address-manager/address-manager.module';

@Module({
    imports: [
        MongooseModule.forRoot(MONGO_KEYS.url),
        UserModule,
        AuthModule,
        RoomModule,
        BooksModule,
        ConfigModule.forRoot(),
        RoomModule,
        BikhshaModule,
        ServeStaticModule.forRoot({
            rootPath: join(__dirname, '..', 'static'),
        }),
        BooksCartModule,
        BooksOrderModule,
        BikhshaServingModule,
        RoomTypesModule,
        PaymentGatewayModule,
        AddressManagerModule,
    ],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule {}
