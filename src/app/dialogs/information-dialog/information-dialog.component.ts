import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Fishes } from '../../../swagger';

@Component({
  selector: 'app-information-dialog',
  templateUrl: './information-dialog.component.html',
  styleUrls: ['./information-dialog.component.css']
})
export class InformationDialogComponent implements OnInit {

  display = false;
  @Input() currentFish: Fishes;
  @Output() showInformationDialog = new EventEmitter<any>();

  constructor() {
  }

  ngOnInit() {
  }

  showDialog() {
    this.display = true;
  }

  hideDialog() {
    this.display = false;
  }

}
