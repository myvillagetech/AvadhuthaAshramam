import { Module } from '@nestjs/common';
import { RoomService } from './room.service';
import { RoomController } from './room.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { MODEL_ENUMS } from 'src/shared/enums/model.enum';
import { RoomSchema } from './schemas/room.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
        { name: MODEL_ENUMS.ROOMS, schema: RoomSchema },
    ]),
  ],
  controllers: [RoomController],
  providers: [RoomService]
})
export class RoomModule {}
