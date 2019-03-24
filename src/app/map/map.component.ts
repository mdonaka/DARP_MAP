import { Component, OnInit } from '@angular/core';
import {MapService} from '../map.service'

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {

  private lat: number = 35.681167;
  private lng: number = 139.767052;
  private zoom: number = 16;

	origin: any;
	destination: any;
	waypoints: any;

	debugFlg:Boolean = false;

	constructor(private mapService: MapService) {	}

  ngOnInit() {
		this.mapService.getOrigin()
			.subscribe(og => this.origin = og);
		this.mapService.getDestination()
			.subscribe(og => this.destination = og);
		this.mapService.getWayPoints()
			.subscribe(og => this.waypoints = og);
  }

	onChange(event:any){
		this.mapService.onChange(event);
	}
}
