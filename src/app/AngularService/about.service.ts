import { Http } from '@angular/http'
import { Injectable } from '@angular/core'
import 'rxjs/add/operator/map';
@Injectable()
export class aboutService {
    constructor(private http: Http) { }
    getAbout() {
      return  this.http.get('http://localhost:3000/component').map(res=>res.json());
    }
  
}