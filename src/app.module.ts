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
import { BikhshaDetailsModule } from './bikhsha-details/bikhsha-details.module';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';

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
        BikhshaDetailsModule,
        ServeStaticModule.forRoot({
            rootPath: join(__dirname, '..', 'static'),
        }),
    ],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule {}
