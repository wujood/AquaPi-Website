import { Injectable, EventEmitter } from '@angular/core';
import { ComponentSettings, ComponentSettingsService, WaterLevelSensor, Thermometer, LightSensor, ParamComponentSettingsPost } from '../../swagger';

@Injectable()
export class SensorsService {

  public updateEvents: EventEmitter<any>;

  private currentComponentSettings: ComponentSettings;
  private historyComponentSettings: ComponentSettings[];

  // TODO: Get real values!
  constructor(public api: ComponentSettingsService) {
    this.currentComponentSettings = {
      piid: 'Fibonacci'
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
    return this.currentComponentSettings.waterthermometer;
  }

  getAirTemp(): Thermometer {
    return this.currentComponentSettings.airthermometer;
  }

  getBrightness(): LightSensor {
    return this.currentComponentSettings.lightsensor;
  }

  getTimestamp(): Date {
    return this.currentComponentSettings.timestamp;
  }

  getHistory(): ComponentSettings[] {
    return this.historyComponentSettings;
  }

  public updateValues() {
    this.api.postComponentSettings({piid: 'Fibonacci'}).subscribe((result: ComponentSettings[]) => {
      if (result != null && result !== undefined) {
        this.currentComponentSettings = result[0];
        this.updateEvents.emit(result);
      }
    }, (error: any) => {
      console.error(error);
    });
  }
}
