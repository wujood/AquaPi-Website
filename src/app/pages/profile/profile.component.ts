import { Component, OnInit } from '@angular/core';
import { ViewData } from '../../components/view/view.component';
import { Fish } from '../../common/types';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {

  fishes: ViewData[];
  plants: ViewData[];
  selectedCity: Fish;

  feedingFrequency: number;
  brightnessThreshold: number;

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

  constructor() {
  }
}
