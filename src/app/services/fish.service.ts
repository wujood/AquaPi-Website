import { Injectable } from '@angular/core';
import { ViewData } from '../components/view/view.component';
import { FishesService, ParamFishes, Fishes } from '../../swagger';
import { Observable } from 'rxjs/Observable';


@Injectable()
export class FishService {

  cache: Fishes[];

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
      this.cache = result;
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
    this.cache.forEach((f: Fishes) => {
      if (f.fishid === fish.value) {
        const temp = {...f};
        temp.piid = 'Fibonacci';
        temp.quantity = fish.amount;
        this.api.putFishes(temp).subscribe((r) => {
        });
      }
    });
  }

}
