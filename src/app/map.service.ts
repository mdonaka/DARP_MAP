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
 
	name1_:String[] = [];
	name2_:String[] = [];
	name1:Subject<String[]> = new Subject<String[]>();
	name2:Subject<String[]> = new Subject<String[]>();

	
	pList: any = [
		[{lat:42.47735, lng:143.27535},"name1"],
		[{lat:42.47805, lng:143.27651},"name2"]
	];


	constructor() {}

	init(): void{
		this.origin.next(this.pList[0][0]);
		this.destination.next(this.pList[1][0]);
		// this.waypoints.push({location:{lat:35.698383, lng:139.773072}});
	}

	onChange(event:any){
		this.distanceList.next(event.routes[0].legs.map(leg => leg.distance.value));
	}

	change(i:any){
		this.name1_ = [];
		this.name2_ = [];
		this.waypoints = [];
		/**/
		this.origin.next(this.pList[0][0]);	
		for(let j = 1;j<this.pList.length-1;++j){
			this.waypoints.push({location:this.pList[j][0]});
		}
		this.destination.next(this.pList[this.pList.length-1][0]);
		this.wayPointsSub.next(this.waypoints);
		/*/
		this.origin.next(this.pList[i][0]);
		this.destination.next(this.pList[i][0]);
		this.name1_.push(this.pList[i][1]);
		for(let j = 0;j<this.pList.length;++j){
			this.waypoints.push({location:this.pList[j][0]});
			this.waypoints.push({location:this.pList[i][0]});
			this.name2_.push(this.pList[j][1]);
			this.name1_.push(this.pList[j][1]);
			this.name2_.push(this.pList[i][1]);
			this.name1_.push(this.pList[i][1]);
		}
		this.name2_.push(this.pList[i][1]);

		this.wayPointsSub.next(this.waypoints);
		this.name1.next(this.name1_);
		this.name2.next(this.name2_);
		/**/
	}

	updateList(list:any){
		this.pList = [];
		for(let val of list){
			this.pList.push([{lat:parseFloat(val[1]), lng:parseFloat(val[2])},val[0]]);
		}
	}
	
	getWayPoints():Observable<any>{
		return of(this.waypoints);
	}
}
