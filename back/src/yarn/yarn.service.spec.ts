import { Test, TestingModule } from '@nestjs/testing';
import { YarnService } from './yarn.service';

describe('YarnService', () => {
  let service: YarnService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [YarnService],
    }).compile();

    service = module.get<YarnService>(YarnService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
