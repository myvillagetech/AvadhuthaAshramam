import { Injectable } from '@nestjs/common';
import { CreateAddressManagerDto } from './dto/create-address-manager.dto';
import { UpdateAddressManagerDto } from './dto/update-address-manager.dto';
import { InjectModel } from '@nestjs/mongoose';
import { MODEL_ENUMS } from 'src/shared/enums/model.enum';
import { Model } from 'mongoose';
import { AddressManagerDocument } from './schemas/address-manager.schemas';
import { AuthService } from 'src/auth/auth.service';

@Injectable()
export class AddressManagerService {
  @InjectModel(MODEL_ENUMS.ADDRESS_MANAGER) private addressManagerModel : Model<AddressManagerDocument>
  constructor(private authService : AuthService){}
  
  async addAddress(createAddressManagerDto: CreateAddressManagerDto, token : any) {
    const user: any = this.authService.getDecodedToken(token);

    const address = new this.addressManagerModel(
      { ...createAddressManagerDto, userId: user._id }
    );

    return await address.save()
  }

  async getAllAddress(token : any) {
    const user: any = this.authService.getDecodedToken(token);

    const address = await this.addressManagerModel.find({userId : user._id});
    return address;
  }

  async updateAddress(addressId : string, addressDetails : UpdateAddressManagerDto){
    const address = await this.addressManagerModel.findByIdAndUpdate(addressId,addressDetails,{new : true})
    return address
  }

  async deleteAddress(addressId : string){
    const address = await this.addressManagerModel.findByIdAndDelete(addressId)
    return address
  }

  async getAddressById(addressId : string){
    const addres = await this.addressManagerModel.findById(addressId);
    return addres
  }
}
