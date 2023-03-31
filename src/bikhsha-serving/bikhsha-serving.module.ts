import { Module } from '@nestjs/common';
import { BikhshaServingService } from './bikhsha-serving.service';
import { BikhshaServingController } from './bikhsha-serving.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { MODEL_ENUMS } from 'src/shared/enums/model.enum';
import { BikhshaServingCreatorSchema } from './schemas/bikhsha-serving.schema';
import { AuthModule } from 'src/auth/auth.module';

@Module({
  imports: [
    MongooseModule.forFeature([
        { name: MODEL_ENUMS.BIKHSHA_SERVING_MODEL, schema: BikhshaServingCreatorSchema },
    ]),
    AuthModule
  ],
  controllers: [BikhshaServingController],
  providers: [BikhshaServingService]
})
export class BikhshaServingModule {}
