import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHealth() {
    return {
      service: 'notification-service',
      status: 'ok',
      timestamp: new Date().toISOString(),
    };
  }
}
