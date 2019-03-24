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
	
	constructor() {}

	init(): void{
		this.origin.next({lat:35.681167, lng:139.767052});
		this.destination.next({lat:35.681167, lng: 139.767052});
		this.waypoints.push({location:{lat:35.703667, lng:139.753393}});
		this.waypoints.push({location:{lat:35.698383, lng:139.773072}});
		this.wayPointsSub.next(this.waypoints);
	}

	onChange(event:any){
		this.distanceList.next(event.routes[0].legs.map(leg => leg.distance.value));
	}

	getWayPoints():Observable<any>{
		return of(this.waypoints);
	}
}
