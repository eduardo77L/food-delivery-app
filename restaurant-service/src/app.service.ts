import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHealth() {
    return {
      service: 'restaurant-service',
      status: 'ok',
      timestamp: new Date().toISOString(),
    };
  }
}
