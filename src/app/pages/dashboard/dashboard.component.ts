import { Component, OnInit } from '@angular/core';
import { SensorsService } from '../../services/sensors.service';
import { StatusService } from '../../services/status.service';
import { ComponentSettings } from '../../../swagger';
import { Message } from 'primeng/components/common/message';
import { MessageService } from 'primeng/components/common/messageservice';

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

  updateValues(result: ComponentSettings) {
    if (this.latestTimestamp === undefined) {
      this.msgs.push({severity: 'success', summary: 'Connected!', detail: 'Everything is connected!'});
    }
    this.piid = result.piid ? result.piid : '';
    this.airtemp = result.thermometer ? result.thermometer.value : 0;
    this.waterlevel = result.waterlevelsensor ? result.waterlevelsensor.value : 0;
    this.watertemp = result.thermometer ? result.thermometer.value : 0;
    this.brightness = result.lightsensor ? result.lightsensor.value : 0;
    this.lamp = result.lamp ? result.lamp.value : 0;
    this.latestTimestamp = new Date(result.timestamp);
    this.error = this.statusService.hasError();
  }

  ngOnInit() {
  }

}
