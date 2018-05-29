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
                  icon: 'fa-water',
                  routerLink: 'dashboard'
              },
              {
                  label: 'Profile',
                  icon: 'fa-user',
                  routerLink: 'profile'
              },
              {
                  label: 'Settings',
                  icon: 'fa-gear',
                  routerLink: 'settings'
              }
          ]
      }
  ];

  constructor() {
  }
}
