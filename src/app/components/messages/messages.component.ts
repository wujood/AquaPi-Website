import { Component, OnInit, Input } from '@angular/core';
import { PushConfigurationService } from '../../../swagger';
import * as MSG from '../../../swagger/model/message';
@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit {

  msgs = [];
  @Input() additionalMessages: string[];
  constructor(private api: PushConfigurationService) { }

  ngOnInit() {
    this.updateMessages();
  }

  updateMessages() {
    this.api.postMessages({piid: 'Fibonacci'}).subscribe(this.receivedMessages.bind(this));
  }

  receivedMessages(messages: MSG.Message[]) {
    this.msgs = [];
    this.additionalMessages.forEach((i) => {
      this.msgs.push({
        severity: 'warn',
        summary: i
      });
    });
    if (messages.length === 0) {
      return;
    }
    messages.forEach(i => {
      let severityLevel: string;
      if (i.messagetype === MSG.Message.MessagetypeEnum.Warning) {
        severityLevel = 'warn';
      } else {
        severityLevel = 'info';
      }
      this.msgs.push({
        severity: severityLevel,
        summary: i.text
      });
    });
  }

}
