import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service'

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {
news: any = [];

  constructor(private newsServ: AppService) { }

  ngOnInit() {
    // Retrieve posts from the API
    this.newsServ.getAllNews().subscribe(news => {
      this.news = news;
    });
  }

}
