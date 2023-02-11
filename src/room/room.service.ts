import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { ApiNotFoundResponse } from '@nestjs/swagger';
import { Model } from 'mongoose';
import { MODEL_ENUMS } from 'src/shared/enums/model.enum';
import { CreateRoomDto } from './dto/create-room.dto';
import { UpdateRoomDto } from './dto/update-room.dto';
import { RoomDocument } from './schemas/room.schema';

@Injectable()
export class RoomService {
  @InjectModel(MODEL_ENUMS.ROOMS) private roomModel: Model<RoomDocument>;
  async createRoom(createRoomDto: CreateRoomDto) {
    const newRoom = await new this.roomModel(createRoomDto);
    return newRoom
  }

  async getAllRooms() {
    const rooms = await this.roomModel.find({});
    if (!rooms && rooms.length === 0) {
      throw new NotFoundException('Rooms Not Found');
    }
    return rooms
  }

  async getRoomById(roomId: string) {
    const room = await this.roomModel.findById(roomId);
    if (room) {
      return room;
    } else {
      throw new NotFoundException('Room data not found!');
    }
  }

  async updateRoom(roomDetails : UpdateRoomDto, roomId : string) {
    const room = await this.roomModel.findByIdAndUpdate(roomId,roomDetails);

    if (!room) {
      throw new NotFoundException(`Room with #${roomId} not found`);
    }
    return room;
    
  }

  async deleteRoom(roomId : string) {
    const room = await this.roomModel.findByIdAndDelete(roomId);

    if (!room) {
      throw new NotFoundException(`Room with #${roomId} not found`);
    }
    return room;
    
  }

  async getAllRoomsByFilledStatus(isFilled : Boolean) {
    const rooms = await this.roomModel.find({
      isFilled : isFilled
    });
    if (!rooms && rooms.length === 0) {
      throw new NotFoundException('Rooms Not Found');
    }
    return rooms
  }

}
