import { Controller, Get, Post, Body, Patch, Param, Delete, Res, HttpStatus, Put } from '@nestjs/common';
import { RoomTypesService } from './room-types.service';
import { CreateRoomTypeDto } from './dto/create-room-type.dto';
import { UpdateRoomTypeDto } from './dto/update-room-type.dto';

@Controller('room-types')
export class RoomTypesController {
  constructor(private readonly roomTypesService: RoomTypesService) {}
  @Post()
  async createUser(@Res() response, @Body() roomTypeDetails: CreateRoomTypeDto) {
      try {
          const newRoom = await this.roomTypesService.createRoomType(roomTypeDetails);
          return response.status(HttpStatus.CREATED).json({
              message: 'Room type created successfully',
              success: true,
              newRoom,
          });
      } catch (error) {
          return response.status(HttpStatus.BAD_REQUEST).json({
              statusCode: 400,
              message: 'Error: Room type not created!',
              error: error,
              success: false,
          });
      }
  }

  @Put('/:id')
  async updateRoomType(
      @Res() response,
      @Param('id') roomTypeId: string,
      @Body() roomTypeDetails: UpdateRoomTypeDto,
  ) {
      try {
          const existingRoom = await this.roomTypesService.updateRoomType(
            roomTypeDetails,
            roomTypeId,
          );
          return response.status(HttpStatus.OK).json({
              message: 'Room type Details successfully updated',
              existingRoom,
              success: true,
          });
      } catch (error) {
        return response.status(HttpStatus.BAD_REQUEST).json({
          statusCode: 400,
          message: 'Error: Failed to update Room type',
          error: error,
          success: false,
      });
      }
  }

  @Get()
  async getAllRoomTypes(@Res() response) {
      try {
          const roomsData = await this.roomTypesService.getAllRoomTypes();
          return response.status(HttpStatus.OK).json({
              message: 'Rooms tyes data found successfully',
              data: roomsData,
              success: true,
          });
      } catch (error) {
        return response.status(HttpStatus.BAD_REQUEST).json({
          statusCode: 400,
          message: 'Error: Failed to get all Rooms type',
          error: error,
          success: false,
      });
      }
  }

  @Get('/:id')
  async getRoomTypeById(@Res() response, @Param('id') roomtypeId: string) {
      try {
          const roomsData = await this.roomTypesService.getRoomTypesById(roomtypeId);
          return response.status(HttpStatus.OK).json({
              message: 'Room type data found successfully',
              data: roomsData,
              success: true,
          });
      } catch (error) {
        return response.status(HttpStatus.BAD_REQUEST).json({
          statusCode: 400,
          message: 'Error: Failed to get Room type',
          error: error,
          success: false,
      });
      }
  }

  @Delete('/:id')
  async deleteRoomType(@Res() response, @Param('id') roomTypeId: string) {
      try {
          const deletedRoom = await this.roomTypesService.deleteRoomType(roomTypeId);
          return response.status(HttpStatus.OK).json({
              message: 'Room Type deleted successfully',
              deletedRoom,
          });
      } catch (error) {
        return response.status(HttpStatus.BAD_REQUEST).json({
          statusCode: 400,
          message: 'Error: Failed to delete Room type',
          error: error,
          success: false,
      });
      }
  }
  
}
