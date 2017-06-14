import { Component, OnInit } from '@angular/core';
import { AppService} from '../app.service'
import {Staff} from '../../Interfaces/Staff'
import {staffType } from '../../Interfaces/stafftype';


@Component({
  // moduleId:module.id,
  selector: 'app-staff',
  templateUrl: './staff.component.html',
  styleUrls: ['./staff.component.css','../../assets/css/didyouknow.css','../../assets/css/flexslider.css','../../assets/css/animate.css']
})
export class StaffComponent implements OnInit {

  constructor(private staffServ:AppService) { }
  
  staffData:Staff[]=[];
   type:staffType[]=[];
  ngOnInit() {
    // this services to get the type of the staff
   
     this.staffServ.getAllStaffData().subscribe(staffData=>{this.staffData=staffData;});
     this.staffServ.gettype().subscribe(type=>{this.type=type;});
  }
}
