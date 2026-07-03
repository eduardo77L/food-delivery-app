import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHealth() {
    return {
      service: 'auth-service',
      status: 'ok',
      timestamp: new Date().toISOString(),
    };
  }
}
