import { Component, OnInit, Input, Output } from '@angular/core';

export interface ViewData {
  name: string;
  value: any;
}

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {

  @Input() items: ViewData[];
  @Input() title: string;
  @Input() placeholder = 'Select';
  @Input() entries: ViewData[];

  public selectedItem: ViewData;

  constructor() { }

  ngOnInit() {
  }

  onChange(event) {
    this.selectedItem = event.value;
  }

  add() {
    this.items.push({...this.selectedItem});
    this.selectedItem = undefined;
  }

}
