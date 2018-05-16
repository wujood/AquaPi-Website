import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';
import { Configuration } from './configuration';

import { ComponentSettingsService } from './api/componentSettings.service';
import { PostService } from './api/post.service';
import { PutService } from './api/put.service';

@NgModule({
  imports:      [ CommonModule, HttpModule ],
  declarations: [],
  exports:      [],
  providers:    [ ComponentSettingsService, PostService, PutService ]
})
export class ApiModule {
    public static forConfig(configurationFactory: () => Configuration): ModuleWithProviders {
        return {
            ngModule: ApiModule,
            providers: [ {provide: Configuration, useFactory: configurationFactory}]
        }
    }
}
