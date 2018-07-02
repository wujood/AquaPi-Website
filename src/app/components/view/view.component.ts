import { Component, OnInit, Input, Output, ViewChild, EventEmitter } from '@angular/core';
import { Spinner } from 'primeng/spinner';
import { HttpClient, HttpHeaders } from '@angular/common/http';

export interface ViewData {
  name: string;
  value: string;
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
  @Output() changedEntries = new EventEmitter<ViewData[]>();
  @Output() showInformationDialog = new EventEmitter<any>();

  public selectedItem: ViewData;

  constructor(private http: HttpClient) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
      })
    };
  }

  ngOnInit() {
  }

  onChange(event: any) {
    this.selectedItem = event.value;
    console.log(this.selectedItem);
  }

  onSpinnerChange(event: any, name, amount) {
    this.items.forEach((item) => {
      if (item.name.valueOf() === name.valueOf()) {
        item.amount = amount;
      }
    });
    this.changedEntries.emit(this.items);
    console.log(name + ': ' + amount);
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
        this.changedEntries.emit(this.items);
        return;
      }
    });
    if (!isAlreadyCreated) {
      this.selectedItem.amount = 0;
      this.items.push({...this.selectedItem});
      this.changedEntries.emit(this.items);
    }

  }

}
