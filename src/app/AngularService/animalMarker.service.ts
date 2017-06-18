import {Http} from '@angular/http' ;
import {Injectable} from '@angular/core' ;
import 'rxjs/add/operator/map';
import {Subscriber} from 'rxjs'
@Injectable()
export class animalMarkerService{
constructor(private http: Http ){}
getAnimalMarker(){
  return  this.http.get('http://localhost:3000/animalstype')
  .map(res => res.json());
}
}