import { Component, OnInit } from '@angular/core';
import {AppService} from '../app.service'
import { DidYouKnow } from '../../Interfaces/DidYouKnow'

@Component({
  //moduleId:module.id,
  selector: 'app-did-uknow',
  templateUrl: './did-uknow.component.html',
  styleUrls: ['./did-uknow.component.css','../../assets/css/animate.css','../../assets/css/didyouknow.css']
})
export class DidUknowComponent implements OnInit {
  constructor(private diduknowServ: AppService ) { }
 diduKnow: DidYouKnow [];

  ngOnInit() {
    this.diduknowServ.getAllDidYouKnow()
    .subscribe(didyouknow=>{
      this.diduKnow=(<DidYouKnow[]>didyouknow);
    });
    // console.log(this.diduKnow);
  }

}
