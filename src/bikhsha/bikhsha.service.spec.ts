import { Test, TestingModule } from '@nestjs/testing';
import { BikhshaService } from './bikhsha.service';

describe('BikhshaService', () => {
  let service: BikhshaService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [BikhshaService],
    }).compile();

    service = module.get<BikhshaService>(BikhshaService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
