import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MapComponent } from './map/map.component';

import {
	AgmCoreModule,
	GoogleMapsAPIWrapper
} from '@agm/core';
import {AgmDirectionModule} from 'agm-direction';
import { environment } from './../environments/environment.prod';
import { DistanceComponent } from './distance/distance.component';

@NgModule({
  declarations: [
    AppComponent,
    MapComponent,
    DistanceComponent
  ],
  imports: [
    BrowserModule,
		AppRoutingModule,
		AgmCoreModule.forRoot({
			apiKey:environment.GOOGLE_MAP_API_KEY
		}),
		AgmDirectionModule,
		FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}

