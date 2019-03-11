import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MapComponent } from './map/map.component';

import {
	AgmCoreModule,
	GoogleMapsAPIWrapper
} from '@agm/core';
import {AgmDirectionModule} from 'agm-direction';

@NgModule({
  declarations: [
    AppComponent,
    MapComponent
  ],
  imports: [
    BrowserModule,
		AppRoutingModule,
		AgmCoreModule.forRoot({
			apiKey:'AIzaSyBbKr0Hy1qhoTitjISVrqf8ZAAnS2DHReQ'
		}),
		AgmDirectionModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
