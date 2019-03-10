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

	map="this is map";

	constructor() {	}

  ngOnInit() {
  }

}
