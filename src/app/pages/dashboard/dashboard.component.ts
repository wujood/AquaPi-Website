import { Component, OnInit } from '@angular/core';
import { SensorsService } from '../../services/sensors.service';
import { StatusService } from '../../services/status.service';
import { ComponentSettings } from '../../../swagger';
import { Message } from 'primeng/components/common/message';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  msgs: Message[] = [];

  // TODO: use service to set values!
  watertemp;
  airtemp;
  waterlevel;
  brightness;
  lamp;
  piid;
  error;
  latestTimestamp;

  constructor(private sensorService: SensorsService,
    private statusService: StatusService) {
    // TODO finish
    this.sensorService.updateEvents.subscribe(this.updateValues.bind(this));
  }

  updateValues(result: ComponentSettings[]) {
    if (this.latestTimestamp === undefined && result[0] !== undefined) {
      this.msgs.push({severity: 'success', summary: 'Connected!', detail: 'Everything is connected!'});
    }
    this.piid = result[0].piid ? result[0].piid : '';
    this.airtemp = result[0].airthermometer ? result[0].airthermometer.value : 0;
    this.waterlevel = result[0].waterlevelsensor ? result[0].waterlevelsensor.value : 0;
    this.watertemp = result[0].waterthermometer ? result[0].waterthermometer.value : 0;
    this.brightness = result[0].lightsensor ? result[0].lightsensor.value : 0;
    this.lamp = result[0].lamp ? result[0].lamp.value : 0;
    this.latestTimestamp = new Date(result[0].timestamp);
    this.error = this.statusService.hasError();
  }

  ngOnInit() {
  }

}
