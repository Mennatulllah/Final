import { Http } from '@angular/http'
import { Injectable } from '@angular/core'
import 'rxjs/add/operator/map';
@Injectable()
export class serviceMarkerService {
    constructor(private http: Http) { }
    getAllServiceMarker() {
      return  this.http.get('http://localhost:3000/services').map(res => res.json());;
    }
    getServiceMarker(id) {
      return  this.http.get(`http://localhost:3000/services/${id}`);

    }
}