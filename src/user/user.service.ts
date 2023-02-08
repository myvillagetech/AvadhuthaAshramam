import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import * as bcrypt from 'bcrypt';


@Injectable()
export class UserService {
  createUser(createUserDto: CreateUserDto) {
    return 'This action adds a new user';
  }

  findAll() {
    return `This action returns all user`;
  }

  findOne(id: number) {
    return `This action returns a #${id} user`;
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
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
