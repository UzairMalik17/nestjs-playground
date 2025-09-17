import { Injectable, Scope } from '@nestjs/common';
import { v4 as uuidv4 } from 'uuid';

@Injectable({ scope: Scope.REQUEST })
export class RequestIdService {
  private readonly requestId: string;

  constructor() {
    this.requestId = uuidv4();
  }

  getRequestId(): string {
    return this.requestId;
  }
}
