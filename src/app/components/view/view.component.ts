import { Component, OnInit, Input, Output } from '@angular/core';

export interface ViewData {
  name: string;
  value: any
}

@Component({
  selector: 'view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {

  @Input() items: ViewData[];
  @Input() title: string;

  @Input() entries: ViewData[];

  private selectedItem: ViewData;

  constructor() { }

  ngOnInit() {
  }

}
