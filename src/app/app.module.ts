import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import {ChartModule} from 'primeng/chart';
import { RouterModule, Routes } from '@angular/router';

import { SelectButtonModule } from 'primeng/selectbutton';
import { SliderModule } from 'primeng/slider';
import { ToggleButtonModule } from 'primeng/togglebutton';
import { DropdownModule } from 'primeng/dropdown';
import { PanelModule } from 'primeng/panel';
import { MenubarModule } from 'primeng/menubar';
import { ButtonModule } from 'primeng/button';
import { ViewComponent } from './components/view/view.component';
import { FishService } from './services/fish.service';
import { PlantService } from './services/plant.service';
import { SettingsComponent } from './pages/settings/settings.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { SensorsService } from './services/sensors.service';
import { StatusService } from './services/status.service';
import { GrowlModule } from 'primeng/growl';
import { CardModule } from 'primeng/card';
import { SpinnerModule } from 'primeng/spinner';
import { OrderListModule } from 'primeng/orderlist';
import { ApiModule } from '../swagger';
import {DialogModule} from 'primeng/dialog';
import {MessagesModule} from 'primeng/messages';
import {MessageModule} from 'primeng/message';

import { ProfileComponent } from './pages/profile/profile.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { InformationDialogComponent } from './dialogs/information-dialog/information-dialog.component';
import { MessagesComponent } from './components/messages/messages.component';

const appRoutes: Routes = [
  { path: 'dashboard', component: DashboardComponent},
  { path: 'settings',      component: SettingsComponent },
  { path: 'profile',      component: ProfileComponent },
  { path: '', component: DashboardComponent, pathMatch: 'full' },
];

@NgModule({
  declarations: [
    AppComponent,
    ViewComponent,
    SettingsComponent,
    DashboardComponent,
    ProfileComponent,
    InformationDialogComponent,
    MessagesComponent
  ],
  imports: [
    RouterModule.forRoot(
      appRoutes
    ),
    ApiModule,
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ToggleButtonModule,
    SliderModule,
    SelectButtonModule,
    DialogModule,
    DropdownModule,
    OrderListModule,
    SpinnerModule,
    PanelModule,
    MenubarModule,
    MessageModule,
    MessagesModule,
    ButtonModule,
    FormsModule,
    GrowlModule,
    ChartModule,
    CardModule
  ],
  providers: [
    FishService,
    PlantService,
    SensorsService,
    StatusService
  ],
  bootstrap: [AppComponent],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class AppModule { }
