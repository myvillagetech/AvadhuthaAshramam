import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';
import { MongooseModule } from '@nestjs/mongoose';
import { MONGO_KEYS } from './config/keys.config';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    MongooseModule.forRoot(MONGO_KEYS.url),
    UserModule, 
    AuthModule, 
    ConfigModule.forRoot(),

  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
