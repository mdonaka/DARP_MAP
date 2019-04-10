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

	name1:String = "";
	name2:String = "";

	file:any;

	num:number=1;

	constructor(private mapService: MapService) {	}

  ngOnInit() {
		this.mapService.distanceList
			.subscribe(dis => this.distanceList = dis);
		this.mapService.name1
			.subscribe(n => this.name1 = n);
		this.mapService.name2
			.subscribe(n => this.name2 = n);
  }

	selectFile(e:any){
		let reader = new FileReader();
		let file = e.target.files[0];
		reader.readAsText(file);
		let dataList = [];
		reader.addEventListener( 'load', () => {
			let data = reader.result.split('\n');
			for(let val of data){
				dataList.push(val.split(','));
			} 
			this.mapService.updateList(dataList);
		})
	} 

	generateRoot(){
		this.mapService.change(this.num);
	}
}
