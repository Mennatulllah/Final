import { Component, OnInit } from '@angular/core';
import { DiduKnowService } from '../AngularService/did-uknow.service';
import { DidYouKnow } from '../../Interfaces/DidYouKnow';
@Component({
  selector: 'app-sample',
  templateUrl: './sample.component.html',
  styleUrls: ['./sample.component.css']
})
export class SampleComponent implements OnInit {
id:any ="img-"
   
  constructor(private diduknowServ: DiduKnowService) { }

  diduKnow: DidYouKnow[] = []
  ngOnInit() {

      this.diduknowServ.getAllDidYouKnow()
        .subscribe(didyouknow => {
          this.diduKnow = didyouknow.filter(a => a.compType == "59137e8f2a47703f3c6cf488");
          console.log(this.diduKnow);
        });
    // }

  }
}

