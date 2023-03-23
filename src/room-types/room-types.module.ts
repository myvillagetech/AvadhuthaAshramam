import { Module } from '@nestjs/common';
import { RoomTypesService } from './room-types.service';
import { RoomTypesController } from './room-types.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { MODEL_ENUMS } from 'src/shared/enums/model.enum';
import { RoomTypeSchema } from './schemas/room-type.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
        { name: MODEL_ENUMS.ROOM_TYPES, schema: RoomTypeSchema },
    ]),
  ],
  controllers: [RoomTypesController],
  providers: [RoomTypesService]
})
export class RoomTypesModule {}
