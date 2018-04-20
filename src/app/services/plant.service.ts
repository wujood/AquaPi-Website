import { Injectable } from '@angular/core';
import { ViewData } from '../components/view/view.component';

@Injectable()
export class PlantService {

  // TODO: Get info from server
  plants: ViewData[] = [
    {name: 'Parsley', value: 'PS'},
    {name: 'Basil', value: 'BL'},
    {name: 'Peppermint', value: 'PM'}
  ];

  constructor() { 

  }

  getPlantItems(): ViewData[] {
    return this.plants
  }

  getPlantEntries(): ViewData[] {
    return this.plants;
  }
}
