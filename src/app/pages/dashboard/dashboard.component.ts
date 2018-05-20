import { Component, OnInit } from '@angular/core';
import { SensorsService } from '../../services/sensors.service';
import { StatusService } from '../../services/status.service';
import { ComponentSettings } from '../../../swagger';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  // TODO: use service to set values!
  watertemp;
  airtemp;
  waterlevel;
  brightness;
  error;

  constructor(private sensorService: SensorsService, private statusService: StatusService) {
    // TODO finish
    this.sensorService.updateEvents.subscribe(this.updateValues.bind(this));
  }

  updateValues(result: ComponentSettings) {
    this.airtemp = result.thermometer.value;
    this.waterlevel = result.waterlevelsensor ? result.waterlevelsensor.value : 0;
    this.watertemp = result.thermometer ? result.thermometer.value : 0;
    this.brightness = result.lightsensor ? result.lightsensor.value : 0;
    this.error = this.statusService.hasError();
  }

  ngOnInit() {
  }

}
