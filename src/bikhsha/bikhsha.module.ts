import { Module } from '@nestjs/common';
import { BikhshaService } from './bikhsha.service';
import { BikhshaController } from './bikhsha.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { MODEL_ENUMS } from 'src/shared/enums/model.enum';
import { BikhshaSchema } from './schemas/bikhsha.schemas';

@Module({
  imports: [
    MongooseModule.forFeature([
        { name: MODEL_ENUMS.BIKHSHA, schema: BikhshaSchema },
    ]),
  ],
  controllers: [BikhshaController],
  providers: [BikhshaService]
})
export class BikhshaModule {}
