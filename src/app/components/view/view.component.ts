import { Component, OnInit, Input, Output } from '@angular/core';

export interface ViewData {
  name: string;
  value: any;
  amount?: number;
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
    let isAlreadyCreated = false;
    this.items.forEach((item) => {
      if (item.name.valueOf() === this.selectedItem.name.valueOf()) {
        isAlreadyCreated = true;
        if (item.amount === undefined) {
          item.amount = 1;
        } else {
          item.amount += 1;
        }
        return;
      }
    });
    if(!isAlreadyCreated) {
      this.selectedItem.amount = 0;
      this.items.push({...this.selectedItem});
    }

  }

}
