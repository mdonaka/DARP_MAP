import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {

  lat: number = 35.681167;
  lng: number = 139.767052;
  zoom: number = 16;

	origin: any;
	destination: any;

	waipoints: any = [];

	debugFlg:bool = false;

	constructor() {	}

  ngOnInit() {
		this.getDirection();
  }

	getDirection(){
		this.origin = {lat:35.681167, lng: 139.767052};
		this.destination = {lat:35.681167, lng: 139.767052};
		this.waipoints.push({location:{lat:35.703667, lng:139.753393}});
		this.waipoints.push({location:{lat:35.698383, lng:139.773072}});
	}
}
