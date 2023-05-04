import { Test, TestingModule } from '@nestjs/testing';
import { AddressManagerController } from './address-manager.controller';
import { AddressManagerService } from './address-manager.service';

describe('AddressManagerController', () => {
  let controller: AddressManagerController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AddressManagerController],
      providers: [AddressManagerService],
    }).compile();

    controller = module.get<AddressManagerController>(AddressManagerController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
