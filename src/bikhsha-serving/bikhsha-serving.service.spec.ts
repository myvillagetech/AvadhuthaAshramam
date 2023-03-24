import { Test, TestingModule } from '@nestjs/testing';
import { BikhshaServingService } from './bikhsha-serving.service';

describe('BikhshaServingService', () => {
  let service: BikhshaServingService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [BikhshaServingService],
    }).compile();

    service = module.get<BikhshaServingService>(BikhshaServingService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
