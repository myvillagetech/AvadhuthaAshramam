import { Controller, Get, Post, Body, Patch, Param, Delete, Res, HttpStatus, Put } from '@nestjs/common';
import { RoomService } from './room.service';
import { CreateRoomDto } from './dto/create-room.dto';
import { UpdateRoomDto } from './dto/update-room.dto';
import { ApiTags } from '@nestjs/swagger';

@Controller('room')
@ApiTags('room')
export class RoomController {
  constructor(private readonly roomService: RoomService) {}


  @Post()
    async createUser(@Res() response, @Body() roomDetails: CreateRoomDto) {
        try {
            const newRoom = await this.roomService.createRoom(roomDetails);
            return response.status(HttpStatus.CREATED).json({
                message: 'Room created successfully',
                success: true,
                newRoom,
            });
        } catch (error) {
            return response.status(HttpStatus.BAD_REQUEST).json({
                statusCode: 400,
                message: 'Error: Room not created!',
                error: error,
                success: false,
            });
        }
    }

    @Put('/:id')
    async updateRoom(
        @Res() response,
        @Param('id') roomId: string,
        @Body() roomDetails: UpdateRoomDto,
    ) {
        try {
            const existingRoom = await this.roomService.updateRoom(
              roomDetails,
              roomId,
            );
            return response.status(HttpStatus.OK).json({
                message: 'Room Details successfully updated',
                existingRoom,
                success: true,
            });
        } catch (error) {
          return response.status(HttpStatus.BAD_REQUEST).json({
            statusCode: 400,
            message: 'Error: Failed to update Room',
            error: error,
            success: false,
        });
        }
    }

    @Get()
    async getAllRooms(@Res() response) {
        try {
            const roomsData = await this.roomService.getAllRooms();
            return response.status(HttpStatus.OK).json({
                message: 'Rooms data found successfully',
                data: roomsData,
                success: true,
            });
        } catch (error) {
          return response.status(HttpStatus.BAD_REQUEST).json({
            statusCode: 400,
            message: 'Error: Failed to get all Rooms',
            error: error,
            success: false,
        });
        }
    }

    @Get('/:id')
    async getRoomById(@Res() response, @Param('id') roomId: string) {
        try {
            const roomsData = await this.roomService.getRoomById(roomId);
            return response.status(HttpStatus.OK).json({
                message: 'Room data found successfully',
                data: roomsData,
                success: true,
            });
        } catch (error) {
          return response.status(HttpStatus.BAD_REQUEST).json({
            statusCode: 400,
            message: 'Error: Failed to get Room',
            error: error,
            success: false,
        });
        }
    }

    @Delete('/:id')
    async deleteRoom(@Res() response, @Param('id') roomId: string) {
        try {
            const deletedRoom = await this.roomService.deleteRoom(roomId);
            return response.status(HttpStatus.OK).json({
                message: 'Room deleted successfully',
                deletedRoom,
            });
        } catch (error) {
          return response.status(HttpStatus.BAD_REQUEST).json({
            statusCode: 400,
            message: 'Error: Failed to delete Room',
            error: error,
            success: false,
        });
        }
    }
  
}
