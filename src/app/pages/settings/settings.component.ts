import { Component, OnInit } from '@angular/core';
import { ViewData } from '../../components/view/view.component';
import { Fish } from '../../common/types';
import { FishService } from '../../services/fish.service';
import { PlantService } from '../../services/plant.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent {

    
  fishes: ViewData[];
  plants: ViewData[];
  selectedCity: Fish;

  value: number;

  items = [
    {
        label: 'Settings',
        icon: 'fa-gear',
        items: [
            {
                label: 'Aquarium',
                icon: 'fa-water'
            },
            {
                label: 'Profile',
                icon: 'fa-user'
            }
        ]
    }
];

  constructor(private fishService: FishService, private plantService: PlantService) {
      
      this.fishes = this.fishService.getFishItems();
      this.plants = this.plantService.getPlantItems();
  }
}
