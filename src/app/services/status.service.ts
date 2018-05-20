import { Injectable } from '@angular/core';
import { SensorsService } from './sensors.service';

@Injectable()
export class StatusService {

  // TODO: real values
  constructor(private sensorService: SensorsService) { }

  isConnected(): boolean {
    return this.sensorService.getTimestamp().valueOf() > (Date.now() + 1000 * 10);
  }

  hasError(): string {
    return null;
  }
}
