import { Injectable } from '@angular/core';
import { ViewData } from '../components/view/view.component';
import { Observable } from 'rxjs/Observable';
import { PlantsService, Plants } from '../../swagger';

@Injectable()
export class PlantService {

  // TODO: Get info from server
  plants: ViewData[] = [
    {name: 'Parsley', value: 'PS', amount: 0},
    {name: 'Basil', value: 'BL', amount: 0},
    {name: 'Peppermint', value: 'PM', amount: 0}
  ];

  constructor(private api: PlantsService) {

  }

  getPlantItems(): Observable<ViewData[]> {
    return this.api.postPlants({}).map((result: Plants[]) => {
      const converted: ViewData[] = [];
      result.forEach((item) => {
        converted.push({
          name: item.name,
          value: item.plantid,
          amount: 0
        });
      });
      return converted;
    });
  }

  getPlantEntries(): Observable<ViewData[]> {
    return this.api.postPlants({piid: 'Fibonacci'}).map((result: Plants[]) => {
      const converted: ViewData[] = [];
      result.forEach((item) => {
        converted.push({
          name: item.name,
          value: item.plantid,
          amount: item.quantity
        });
      });
      return converted;
    });
  }

  addPlant(plant: ViewData) {
    this.api.putPlants({
      piid: 'Fibonacci',
      plantid: plant.value,
      name: plant.name,
      quantity: plant.amount
    }).subscribe((r) => {
    });
  }
}
