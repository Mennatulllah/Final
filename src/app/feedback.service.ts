import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class FeedbackService {

 constructor(private http: Http) { }

  // Get all posts from the API
  getAllFeedbacks() {
    return this.http.get('http://localhost:3000/feedback')
      .map(res => res.json());
  }


}
