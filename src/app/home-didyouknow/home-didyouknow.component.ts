import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-didyouknow',
  templateUrl: './home-didyouknow.component.html',
  styleUrls: ['./home-didyouknow.component.css','../../assets/css/infoSec.css']
})
export class HomeDidyouknowComponent implements OnInit {

  constructor() { }
ngOnInit (){}
 config: Object = {
            pagination: '.swiper-pagination',
            paginationClickable: true,
            nextButton: '.swiper-button-next',
            prevButton: '.swiper-button-prev',
            spaceBetween: 30
        };

}
