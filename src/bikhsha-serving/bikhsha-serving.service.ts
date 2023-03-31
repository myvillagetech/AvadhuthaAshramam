import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { AuthService } from 'src/auth/auth.service';
import { MODEL_ENUMS } from 'src/shared/enums/model.enum';
import { CreateBikhshaServingDto } from './dto/create-bikhsha-serving.dto';
import { UpdateBikhshaServingDto } from './dto/update-bikhsha-serving.dto';
import { BikhshaServingDocument } from './schemas/bikhsha-serving.schema';

@Injectable()
export class BikhshaServingService {
    @InjectModel(MODEL_ENUMS.BIKHSHA_SERVING_MODEL)
    private bikhshaServingModel: Model<BikhshaServingDocument>;
    constructor(private authService : AuthService){}

    async createBikshaServe(createBikhshaServingDto: CreateBikhshaServingDto, token : any) {
        const user : any = this.authService.getDecodedToken(token);

        const bikhsha = new this.bikhshaServingModel(
          { ...createBikhshaServingDto, userId: user._id }
        );
        return await bikhsha.save();
    }

    async getAllBikhshaBookings(token : any){
      const user : any = this.authService.getDecodedToken(token);
      const bikhshas = await this.bikhshaServingModel.find(user.roles[0] === 'Superadmin' ? {} : {userId : user._id});
      return bikhshas;
    }

    async getBikhshaServeById(bikhshaId : string){
      const bikhshas = await this.bikhshaServingModel.findById(bikhshaId);
      return bikhshas;
    }
}
