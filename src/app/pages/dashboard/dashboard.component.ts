import { Component, OnInit } from '@angular/core';
import { SensorsService } from '../../services/sensors.service';
import { StatusService } from '../../services/status.service';

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
    this.airtemp = this.sensorService.getAirTemp();
    this.waterlevel = this.sensorService.getWaterLevel();
    this.watertemp = this.sensorService.getWaterTemp();
    this.brightness = this.sensorService.getBrightness();
    this.error = this.statusService.hasError();
    // TODO finish
  }

  ngOnInit() {
  }

}
