import { Component, OnInit } from '@angular/core';

@Component({ 
 
  selector: 'app-contact-map',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

 lat: number = -33.91722;
 lng: number = 151.23064;

  ngOnInit() {
   
  }
}