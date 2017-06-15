import { Component, OnInit } from '@angular/core';
import {NgxAutoScroll} from "ngx-auto-scroll/lib/ngx-auto-scroll.directive";

@Component({
  selector: 'app-sample',
  templateUrl: './sample.component.html',
  styleUrls: ['./sample.component.css']
})
export class SampleComponent implements OnInit {

  constructor() { }
messages: any=["hello","toqa","be5","karma"];
  ngOnInit() {
  }
  

}
