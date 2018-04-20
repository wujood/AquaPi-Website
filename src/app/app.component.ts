import { Component } from '@angular/core';
import { SelectItem } from 'primeng/api';
import { FishService } from './services/fish.service';
import { ViewData } from './components/view/view.component';
import { PlantService } from './services/plant.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
    
    items = [
      {
          label: 'Settings',
          icon: 'fa-menu',
          items: [
              {
                  label: 'Aquarium',
                  icon: 'fa-water'
              },
              {
                  label: 'Profile',
                  icon: 'fa-user'
              },
              {
                  label: 'Settings',
                  icon: 'fa-gear'
              }
          ]
      }
  ];

  constructor() {
  }
}
