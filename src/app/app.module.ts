import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';

import {SelectButtonModule} from 'primeng/selectbutton';
import {SliderModule} from "primeng/slider";
import {ToggleButtonModule} from 'primeng/togglebutton';
import {DropdownModule} from 'primeng/dropdown';
import { PanelModule } from "primeng/panel";
import { MenubarModule } from "primeng/menubar";
import { ButtonModule } from "primeng/button";
import { ViewComponent } from './components/view/view.component';
import { FishService } from './services/fish.service';
import { PlantService } from './services/plant.service';
import { SettingsComponent } from './pages/settings/settings.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { SensorsService } from './services/sensors.service';

@NgModule({
  declarations: [
    AppComponent,
    ViewComponent,
    SettingsComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ToggleButtonModule,
    SliderModule,
    SelectButtonModule,
    DropdownModule,
    PanelModule,
    MenubarModule,
    ButtonModule
  ],
  providers: [
    FishService,
    PlantService,
    SensorsService
  ],
  bootstrap: [AppComponent],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class AppModule { }
