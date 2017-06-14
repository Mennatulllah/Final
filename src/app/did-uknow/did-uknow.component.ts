import { Component, OnInit } from '@angular/core';
import { DiduKnowService} from '../AngularService/did-uknow.service'

@Component({
  //moduleId:module.id,
  selector: 'app-did-uknow',
  templateUrl: './did-uknow.component.html',
  styleUrls: ['./did-uknow.component.css','../../assets/css/animate.css','../../assets/css/didyouknow.css']
})
export class DidUknowComponent implements OnInit {
  constructor(private diduknowServ: DiduKnowService ) { }
//  diduKnow: DidYouKnow [];
diduKnow :any=[]
  ngOnInit() {
    this.diduknowServ.getAllDidYouKnow()
    .subscribe(didyouknow=>{
      this.diduKnow.filter(a=>a.compType=="59137e8f2a47703f3c6cf488");
      console.log(this.diduKnow);
    });
  
  }

}
