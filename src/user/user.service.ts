import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import * as bcrypt from 'bcrypt';
import { MODEL_ENUMS } from 'src/shared/enums/model.enum';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { UserDocument } from './schemas/user.schemas';


@Injectable()
export class UserService {
  @InjectModel(MODEL_ENUMS.USERS) private usersModel: Model<UserDocument>;

  async createUser(createUserDto: CreateUserDto) {

    const hasedPassword = await this.generatePassword(
      createUserDto.password,
    );

    createUserDto.password = hasedPassword;
    const newUser = await new this.usersModel(createUserDto);
    return newUser.save();
  }


  /**
     * it will genrate the hashed password
     * @param password user Password
     * @returns the hashed password
     */
  async generatePassword(password: string): Promise<any> {
    const hash = await bcrypt.hashSync(password, 10);
    return hash;
}

/**
 * this is to verify unhashed password and hashed password
 * @param password unhased password
 * @param hashedPassword allready hashed and stored password
 * @returns a boolean true or false;
 */
async verifyPassword(
    password: string,
    hashedPassword: string,
): Promise<any> {
    const result = await bcrypt.compareSync(password, hashedPassword);
    return result;
}
}
