import { Component, OnInit, ViewChild } from '@angular/core';
import { SensorsService } from '../../services/sensors.service';
import { StatusService } from '../../services/status.service';
import { ComponentSettings, PushConfigurationService } from '../../../swagger';
import { Message } from 'primeng/components/common/message';
import * as MSG from '../../../swagger/model/message';
import { MessagesComponent } from '../../components/messages/messages.component';

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
  lamp = 0;
  feeder = 0;
  piid;
  error;
  latestTimestamp;
  latestSettings: ComponentSettings;
  warnings: string[] = [];
  @ViewChild('messages') messageBox: MessagesComponent;

  constructor(private sensorService: SensorsService,
    private statusService: StatusService) {
    // TODO finish
    this.sensorService.updateEvents.subscribe(this.updateValues.bind(this));
  }

  updateValues(result: ComponentSettings[]) {
    this.warnings = [];
    if (this.latestTimestamp === undefined && result[0] !== undefined) {
      this.msgs.push({severity: 'success', summary: 'Connected!', detail: 'Everything is connected!'});
    }
    this.piid = result[0].piid ? result[0].piid : '';
    this.airtemp = result[0].airthermometer ? result[0].airthermometer.value : 0;
    this.waterlevel = result[0].waterlevelsensor ? result[0].waterlevelsensor.value : 0;
    this.watertemp = result[0].waterthermometer ? result[0].waterthermometer.value : 0;
    this.brightness = result[0].lightsensor ? result[0].lightsensor.value : 0;
    this.feeder = result[0].feeder ? result[0].feeder.value : 0;
    this.lamp = result[0].lamp ? result[0].lamp.value : 0;

    if (result[0].waterthermometer.message !== null && result[0].waterthermometer.message !== '') {
      this.warnings.push(result[0].waterthermometer.message);
      this.warnings = [...this.warnings];
      this.messageBox.updateMessages();
    } else {
      this.warnings = [];
      this.messageBox.updateMessages();
    }

    this.latestTimestamp = new Date(result[0].timestamp);
    this.error = this.statusService.hasError();
    this.latestSettings = {...result[0]};
  }

  startFeeding() {
    const feederSettings = {...this.latestSettings};
    feederSettings.feeder.value = 1;
    this.sensorService.api.putComponentSettings(feederSettings).subscribe((r) => {

    });
  }

  switchLamp() {
    const feederSettings = {...this.latestSettings};
    feederSettings.lamp.value = (this.latestSettings.lamp.value === 1) ? 0 : 1;
    this.sensorService.api.putComponentSettings(feederSettings).subscribe((r) => {

    });
  }

  ngOnInit() {
  }

}
