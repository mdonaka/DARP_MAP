import { Injectable } from '@angular/core';
import { Observable,of,Subject  } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MapService {

	origin: any;
	destination: any;

	waypoints: any = [];

	distanceList:Subject<number[]> = new Subject<number[]>();

	constructor() { 
		this.origin = {lat:35.681167, lng: 139.767052};
		this.destination = {lat:35.681167, lng: 139.767052};
		this.waypoints.push({location:{lat:35.703667, lng:139.753393}});
		this.waypoints.push({location:{lat:35.698383, lng:139.773072}});
	}

	onChange(event:any){
		this.distanceList.next(event.routes[0].legs.map(leg => leg.distance.value));
	}

	getOrigin(): Observable<any>{
		return of(this.origin);
	}
	getDestination():Observable<any>{
		return of(this.destination);
	}
	getWayPoints():Observable<any>{
		return of(this.waypoints);
	}
}
