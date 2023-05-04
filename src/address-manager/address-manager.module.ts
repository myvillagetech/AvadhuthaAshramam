import { Module } from '@nestjs/common';
import { AddressManagerService } from './address-manager.service';
import { AddressManagerController } from './address-manager.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { MODEL_ENUMS } from 'src/shared/enums/model.enum';
import { AddressManagerSchema } from './schemas/address-manager.schemas';
import { AuthModule } from 'src/auth/auth.module';

@Module({
  imports: [
    MongooseModule.forFeature([
        { name: MODEL_ENUMS.ADDRESS_MANAGER, schema:  AddressManagerSchema },
    ]),
    AuthModule
  ],
  controllers: [AddressManagerController],
  providers: [AddressManagerService]
})
export class AddressManagerModule {}
