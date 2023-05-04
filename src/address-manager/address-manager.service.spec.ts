import { Test, TestingModule } from '@nestjs/testing';
import { AddressManagerService } from './address-manager.service';

describe('AddressManagerService', () => {
  let service: AddressManagerService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AddressManagerService],
    }).compile();

    service = module.get<AddressManagerService>(AddressManagerService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
