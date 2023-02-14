import { Test, TestingModule } from '@nestjs/testing';
import { BikhshaDetailsService } from './bikhsha-details.service';

describe('BikhshaDetailsService', () => {
  let service: BikhshaDetailsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [BikhshaDetailsService],
    }).compile();

    service = module.get<BikhshaDetailsService>(BikhshaDetailsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
