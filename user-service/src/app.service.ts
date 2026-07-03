import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHealth() {
    return {
      service: 'user-service',
      status: 'ok',
      timestamp: new Date().toISOString(),
    };
  }
}
