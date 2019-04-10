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

	pList: any = [
		{lat:42.47735, lng:143.27535},
		{lat:42.47805, lng:143.27651}
	];


	constructor() {}

	init(): void{
		this.origin.next(this.pList[0]);
		this.destination.next(this.pList[1]);
		// this.waypoints.push({location:{lat:35.703667, lng:139.753393}});
		// this.waypoints.push({location:{lat:35.698383, lng:139.773072}});
		// this.wayPointsSub.next(this.waypoints);
	}

	onChange(event:any){
		this.distanceList.next(event.routes[0].legs.map(leg => leg.distance.value));
	}

	change(i:any,j:any){
		this.origin.next(this.pList[0]);
		this.destination.next(this.pList[0]);
		// this.waypoints.push({location:this.pList[0]});
		// this.wayPointsSub.next(this.waypoints);
	}

	getWayPoints():Observable<any>{
		return of(this.waypoints);
	}
}
