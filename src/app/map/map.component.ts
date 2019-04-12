import { Component, OnInit } from '@angular/core';
import {MapService} from '../map.service'

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {

  private lat: number = 42.47735;
  private lng: number = 143.27535;
  private zoom: number = 16;

	origin: any;
	destination: any;
	waypoints: any;

	debugFlg:Boolean = false;

	/**/
	opt:Boolean = true;/*/
	opt:Boolean = false;
	/**/
	constructor(private mapService: MapService) {	}

  ngOnInit() {
		this.mapService.origin
			.subscribe(og => this.origin = og);
		this.mapService.destination
			.subscribe(des => this.destination = des);
		this.mapService.wayPointsSub
			.subscribe(wp => this.waypoints = wp);
		this.mapService.init();
  }

	onChange(event:any){
		this.mapService.onChange(event);
	}

}
