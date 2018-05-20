import { Injectable, EventEmitter } from '@angular/core';
import { ComponentSettings, ComponentSettingsService, WaterLevelSensor, Thermometer, LightSensor } from '../../swagger';

@Injectable()
export class SensorsService {

  public updateEvents: EventEmitter<any>;

  private currentComponentSettings: ComponentSettings;

  // TODO: Get real values!
  constructor(public api: ComponentSettingsService) {
    this.currentComponentSettings = {

    };
    this.updateEvents = new EventEmitter();
    setInterval(() => {
      this.updateValues();
    }, 1000);
  }

  getWaterLevel(): WaterLevelSensor {
    console.log(this.currentComponentSettings.waterlevelsensor);
    return this.currentComponentSettings.waterlevelsensor;
  }

  getWaterTemp(): Thermometer {
    return this.currentComponentSettings.thermometer;
  }

  getAirTemp(): Thermometer {
    return this.currentComponentSettings.thermometer;
  }

  getBrightness(): LightSensor {
    return this.currentComponentSettings.lightsensor;
  }

  getTimestamp(): Date {
    return this.currentComponentSettings.timestamp;
  }

  public updateValues() {
    this.api.postComponentSettings().subscribe((result: ComponentSettings) => {
      if (result != null && result !== undefined) {
        this.currentComponentSettings = result;
        this.updateEvents.emit(result);
      }
    }, (error: any) => {
      console.error(error);
    });
  }
}
