import { Injectable } from '@angular/core';
import { Http } from '@angular/http';


@Injectable()
export class PlacesService {

   constructor(private http: Http) { }

  // Get all zones from the API
  getPlaces() {
    return this.http.get('http://localhost:3000/zones')
      .map(res => res.json());
  }

}

