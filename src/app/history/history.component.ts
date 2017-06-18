import { Component, OnInit } from '@angular/core';
//import {map} from '../../assets/js/map.js';
 import { aboutService} from '../AngularService/about.service';
import {Iabout } from '../../Interfaces/Iabout';
import { Jsonp } from '@angular/http';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css']
})
export class HistoryComponent implements OnInit {
   constructor( private  _aboutService: aboutService) { }
History : any=[];
flag: boolean;
  
  ngOnInit() {
    this.History = [
      { Date: "Apr 2014", Title: "one", Description: "ayklaaaaaaaaaam", img:"", flag:true },
    { Date: "Apr 2014", Title: "two", Description: "ayklaaaaaaaaaam", img:"",flag:false},
    { Date: "Apr 2014", Title: "three", Description: "ayklaaaaaaaaaam", img:"",flag:true },
     ];
      //   let result: IMarker[] = [{ longtitude: 7.809017, latitute: 51.678425, img: '', service_type: ServiceType. }, { longtitude: 7.809027, latitute: 51.678419, img: '', service_type: ServiceType.INFORMATION }, { longtitude: 7.809037, latitute: 51.678428, img: '', service_type: ServiceType.REST }];

    console.log(history.length);
   // this._aboutService.getAbout().subscribe((histories:any) => { this.History=  histories.filter(a=>a.compType == 'history');});
// this._Json.get('https://code.jquery.com/jquery-3.2.1.min.js').subscribe();
// this._Json.get('skel/3.0.1/skel.min.js');
}

}