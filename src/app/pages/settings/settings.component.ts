import { Component, OnInit } from '@angular/core';
import { ViewData } from '../../components/view/view.component';
import { Fish } from '../../common/types';
import { FishService } from '../../services/fish.service';
import { PlantService } from '../../services/plant.service';
import { PushConfigurationService } from '../../../swagger';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent {

    fishes: ViewData[];
    fishesInside: ViewData[];
    plants: ViewData[];
    plantsInside: ViewData[];
    selectedCity: Fish;

    checked: boolean;
    feedingFrequency: number;
    brightnessThreshold: number;
    waterFlowSensitivity: number;
    rangeValuesWater: number[] = [0, 100];
    rangeValuesAir: number[] = [0, 100];

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

  constructor(private fishService: FishService, private plantService: PlantService, private configService: PushConfigurationService) {
    this.fishService.getFishItems().subscribe((r) => { this.fishes = r; });
    this.fishService.getFishEntries().subscribe((r) => { this.fishesInside = r; });
    this.plantService.getPlantItems().subscribe((r) => { this.plants = r; });
    this.plantService.getPlantEntries().subscribe((r) => { this.plantsInside = r; });
    this.configService.postPushConfiguration({piid: 'Fibonacci'}).subscribe((result) => {
        this.checked = (result.togglepushnotifications === 1) ? true : false;
        this.feedingFrequency = result.feederfrequency;
        this.waterFlowSensitivity = result.waterflowsensitivity;
        this.rangeValuesAir[0] = result.minairtemperature;
        this.rangeValuesAir[1] = result.maxairtemperature;
        this.rangeValuesWater[0] = result.minwatertemperature;
        this.rangeValuesWater[1] = result.maxwatertemperature;
        this.brightnessThreshold = result.brightnesstreshhold;
    });
  }

  changedConfiguration() {
    this.configService.putPushConfiguration({
        piid: 'Fibonacci',
        brightnesstreshhold: this.brightnessThreshold,
        feederfrequency: this.feedingFrequency,
        minairtemperature: this.rangeValuesAir[0],
        maxairtemperature: this.rangeValuesAir[1],
        minwatertemperature: this.rangeValuesWater[0],
        maxwatertemperature: this.rangeValuesWater[1],
        togglepushnotifications: this.checked ? 1 : 0,
        waterflowsensitivity: this.waterFlowSensitivity
    }).subscribe((c) => {});
  }

  handleChangedWaterTemp(e) {
    if (this.rangeValuesWater[0] > this.rangeValuesWater[1]) {
        this.rangeValuesWater[1] = this.rangeValuesWater[0];
    }
    this.rangeValuesWater = [...this.rangeValuesWater];
    this.changedConfiguration();
  }

  handleChangedWaterTemp2(e) {
    if (this.rangeValuesWater[1] < this.rangeValuesWater[0]) {
        this.rangeValuesWater[0] = this.rangeValuesWater[1];
    }
    this.rangeValuesWater = [...this.rangeValuesWater];
    this.changedConfiguration();
  }

  handleChangedAirTemp(e) {
    if (this.rangeValuesAir[0] > this.rangeValuesAir[1]) {
        this.rangeValuesAir[1] = this.rangeValuesAir[0];
    }
    this.rangeValuesAir = [...this.rangeValuesAir];
    this.changedConfiguration();
  }

  handleChangedAirTemp2(e) {
    if (this.rangeValuesAir[1] < this.rangeValuesAir[0]) {
        this.rangeValuesAir[0] = this.rangeValuesAir[1];
    }
    this.rangeValuesAir = [...this.rangeValuesAir];
    this.changedConfiguration();
  }

  changedFishes(e: ViewData[]) {
        e.forEach((item) => {
        this.fishService.addFish(item);
        });
    }

  changedPlants(e: ViewData[]) {
        e.forEach((item) => {
            this.plantService.addPlant(item);
        });
  }
}
