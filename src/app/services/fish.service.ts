import { Injectable } from '@angular/core';
import { ViewData } from '../components/view/view.component';
import { FishesService, ParamFishes, Fishes } from '../../swagger';
import { Observable } from 'rxjs/Observable';


@Injectable()
export class FishService {


  constructor(private api: FishesService) {
  }

  getFishItems(): Observable<ViewData[]> {
    return this.api.postFishes({}).map((result: Fishes[]) => {
      const converted: ViewData[] = [];
      result.forEach((item) => {
        converted.push({
          name: item.name,
          value: item.fishid,
          amount: 0
        });
      });
      return converted;
    });
  }

  getFishEntries(): Observable<ViewData[]> {
    return this.api.postFishes({piid: 'Fibonacci'}).map((result: Fishes[]) => {
      const converted: ViewData[] = [];
      result.forEach((item) => {
        converted.push({
          name: item.name,
          value: item.fishid,
          amount: item.quantity
        });
      });
      return converted;
    });
  }

  addFish(fish: ViewData) {
    this.api.putFishes({
      piid: 'Fibonacci',
      fishid: fish.value,
      name: fish.name,
      quantity: fish.amount
    }).subscribe((r) => {
    });
  }

}
