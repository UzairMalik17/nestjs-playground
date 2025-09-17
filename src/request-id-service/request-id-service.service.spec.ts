import { Test, TestingModule } from '@nestjs/testing';
import { RequestIdServiceService } from './request-id.service';

describe('RequestIdServiceService', () => {
  let service: RequestIdServiceService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [RequestIdServiceService],
    }).compile();

    service = module.get<RequestIdServiceService>(RequestIdServiceService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
