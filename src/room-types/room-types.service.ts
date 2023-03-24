import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { MODEL_ENUMS } from 'src/shared/enums/model.enum';
import { CreateRoomTypeDto } from './dto/create-room-type.dto';
import { UpdateRoomTypeDto } from './dto/update-room-type.dto';
import { RoomTypeDocument } from './schemas/room-type.schema';

@Injectable()
export class RoomTypesService {
  @InjectModel(MODEL_ENUMS.ROOM_TYPES) private roomTypesModel: Model<RoomTypeDocument>;
  
  async createRoomType(createRoomTypeDto: CreateRoomTypeDto) {
    const newRoomType = await new this.roomTypesModel(createRoomTypeDto);
    return newRoomType.save();
  }

  async getAllRoomTypes() {
    const roomsTypes = await this.roomTypesModel.find({});
    if (!roomsTypes && roomsTypes.length === 0) {
      throw new NotFoundException('Room type Not Found');
    }
    return roomsTypes
  }

  async getRoomTypesById(roomTypeId: string) {
    const roomType = await this.roomTypesModel.findById(roomTypeId);
    if (roomType) {
      return roomType;
    } else {
      throw new NotFoundException('Room type data not found!');
    }
  }

  async updateRoomType(roomTypeDetails : UpdateRoomTypeDto, roomTypeId : string) {
    const room = await this.roomTypesModel.findByIdAndUpdate(roomTypeId,roomTypeDetails);

    if (!room) {
      throw new NotFoundException(`Room type with #${roomTypeId} not found`);
    }
    return room;
    
  }

  async deleteRoomType(roomTypeId : string) {
    const room = await this.roomTypesModel.findByIdAndDelete(roomTypeId);

    if (!room) {
      throw new NotFoundException(`Room type with #${roomTypeId} not found`);
    }
    return room;
    
  }

}
