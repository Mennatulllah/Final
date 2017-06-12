import { Component, OnInit } from '@angular/core';
import {AppService} from '../app.service'
import {FAQ} from '../../Interfaces/FAQ';
import {FAQType} from '../../Interfaces/FAQType';

@Component({
  // moduleId:module.id,
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.css','../../assets/css/TipsStyle.css']
})
export class FaqComponent implements OnInit {

 faq: FAQ[] = [];
 faqtype: FAQType[]=[];

  constructor(private faqserv: AppService ) { }

  ngOnInit() {
    // Retrieve all the questions and answers of faq from the API
    this.faqserv.getAllFAQs().subscribe(faq => { this.faq = (<FAQ[]>faq);
    console.log(this.faq);});

    // retrieve the faq type from the database 
     this.faqserv.getAllFAQTypes().subscribe(faqtype => { this.faqtype = (<FAQType[]>faqtype);});
  }
} 