import { Injectable } from '@angular/core';

@Injectable()
export class SensorsService {

  // TODO: Get real values!
  constructor() { }

  getWaterLevel(): number {
    return 30;
  }

  getWaterTemp(): number {
    return 20.1;
  }

  getAirTemp(): number {
    return 24.3;
  }

  getBrightness(): number {
    return 67.4;
  }
}
