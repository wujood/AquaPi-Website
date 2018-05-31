import { Injectable } from '@angular/core';
import { ViewData } from '../components/view/view.component';

@Injectable()
export class PlantService {

  // TODO: Get info from server
  plants: ViewData[] = [
    {name: 'Parsley', value: 'PS', amount: 0},
    {name: 'Basil', value: 'BL', amount: 0},
    {name: 'Peppermint', value: 'PM', amount: 0}
  ];

  constructor() {

  }

  getPlantItems(): ViewData[] {
    return this.plants;
  }

  getPlantEntries(): ViewData[] {
    return this.plants;
  }
}
