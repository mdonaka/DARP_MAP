import { Injectable } from '@angular/core';
import { Observable,of,Subject  } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MapService {

	origin: Subject<any> = new Subject<any>();
	destination: Subject<any> = new Subject<any>();

	waypoints: any = [];
	wayPointsSub:Subject<any> = new Subject<any>();

	distanceList:Subject<number[]> = new Subject<number[]>();

	name1:Subject<String> = new Subject<String>();
	name2:Subject<String> = new Subject<String>();

	
	pList: any = [
		[{lat:42.47735, lng:143.27535},"name1"],
		[{lat:42.47805, lng:143.27651},"name2"]
	];


	constructor() {}

	init(): void{
		this.origin.next(this.pList[0][0]);
		this.destination.next(this.pList[1][0]);
		// this.waypoints.push({location:{lat:35.703667, lng:139.753393}});
		// this.waypoints.push({location:{lat:35.698383, lng:139.773072}});
		// this.wayPointsSub.next(this.waypoints);
	}

	onChange(event:any){
		this.distanceList.next(event.routes[0].legs.map(leg => leg.distance.value));
	}

	change(i:any){
		this.origin.next(this.pList[0][0]);
		this.destination.next(this.pList[i][0]);
		// this.waypoints.push({location:this.pList[0]});
		// this.wayPointsSub.next(this.waypoints);
		this.name1.next(this.pList[0][1]);
		this.name2.next(this.pList[i][1]);
	}

	updateList(list:any){
		this.pList = [];
		for(let val of list){
			this.pList.push([{lat:parseFloat(val[1]), lng:parseFloat(val[2])},val[0]]);
		}
		console.log(this.pList);
	}
	
	getWayPoints():Observable<any>{
		return of(this.waypoints);
	}
}
