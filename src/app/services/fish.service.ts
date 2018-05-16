import { Injectable } from '@angular/core';
import { ViewData } from '../components/view/view.component';


@Injectable()
export class FishService {

  // TODO: Get Data from service
  fishes: ViewData[] = [
    {name: 'Goldfish', value: 'GF'},
    {name: 'Shrimp', value: 'SH'}
  ];

  constructor() { }

  getFishItems() {
    return this.fishes;
  }

  getFishEntries() {
    return this.fishes;
  }

}
