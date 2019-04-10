import { Component, OnInit } from '@angular/core';
import {MapService} from '../map.service'

@Component({
  selector: 'app-distance',
  templateUrl: './distance.component.html',
  styleUrls: ['./distance.component.css']
})
export class DistanceComponent implements OnInit {

	distanceList:number[] =[];

	fileText:number[] = [];

	constructor(private mapService: MapService) {	}

  ngOnInit() {
		this.mapService.distanceList
			.subscribe(dis => this.distanceList = dis);
  }
}
