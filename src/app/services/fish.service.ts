import { Injectable } from '@angular/core';
import { ViewData } from '../components/view/view.component';


@Injectable()
export class FishService {

  // TODO: Get Data from service
  fishes: ViewData[] = [
    {name: 'Goldfish', value: 'GF', amount: 0},
    {name: 'Shrimp', value: 'SH', amount: 0}
  ];

  constructor() { }

  getFishItems() {
    return this.fishes;
  }

  getFishEntries() {
    return this.fishes;
  }

}
