import { Module } from '@nestjs/common';
import { BikhshaDetailsService } from './bikhsha-details.service';
import { BikhshaDetailsController } from './bikhsha-details.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { MODEL_ENUMS } from 'src/shared/enums/model.enum';
import { BikhshaDetailsSchema } from './schemas/biksha-details.schemas';

@Module({
  imports: [
    MongooseModule.forFeature([
        { name: MODEL_ENUMS.BIKHSHA_DETAILS, schema: BikhshaDetailsSchema },
    ]),
  ],
  controllers: [BikhshaDetailsController],
  providers: [BikhshaDetailsService]
})
export class BikhshaDetailsModule {}
