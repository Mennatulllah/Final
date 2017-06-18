import { Component, OnInit } from '@angular/core';
import { AnimalType } from 'enums/AnimalType';
import { ServiceType } from 'enums/ServiceType';
import { IMarker } from '../../Interfaces/IMarker';

import { serviceMarkerService } from "../AngularService/serviceMarker.service";
import { animalMarkerService } from "../AngularService/animalMarker.service";

@Component({
  // moduleId :  module.id,
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css'],
  providers: [animalMarkerService]
})

export class MapComponent implements OnInit {
  lat: number = 30.022676;
  lng: number = 31.213691;
  f: boolean = true;
  //  zoom: number = 25;
  animalsMarkers: any[] = [];
  servicesMarkers: any[] = [];
  all: any[] = [];
  isAnimalChecked: boolean = false;
  isServerChecked: boolean = false;
  isAllChecked: boolean = false;


  constructor(private serviceMarker: serviceMarkerService, private animalMarker: animalMarkerService) {

  }
  toggle(input) {
    var x = input.target.value;

    //console.log("when i click", input, x);
    if (x === 'all') {
      if (this.isAllChecked) {
        let result: any[] = [];
        this.isAllChecked = false;
        //console.log("concat", result);
        return result;
      }
      else {
        let result: any[] = this.animalsMarkers.concat(this.servicesMarkers);
        this.isAllChecked = true;

        // console.log("concattttt", result);
        return result;
      }
    }
    if (x === 'Animals') {
      if (this.isAnimalChecked) {
        let result: any[] = this.animalsMarkers = [];
        this.isAnimalChecked = false;
        // console.log("animal off", result);
        return result;

      }
      else {
        this.isAnimalChecked = true;
        let result: any[] = this.animalsMarkers
        // console.log("animal onn", result);

        return result;
      }

    }
    else {
      if (this.isServerChecked) {
        let result: any[] = this.servicesMarkers = [];
        this.isServerChecked = false;
        return result;
      }
      else if (x === "rest" || x === "Services") {

        this.isServerChecked = true;
        let result: any[] = this.servicesMarkers.filter(res => res.title === x);
        console.log("restaurant", result);
        return result;
      }
    }
  }
  //else if(x === "Services"){

  //          this.isServerChecked = true;
  //        let result: any[] =  this.servicesMarkers.filter(res=> res.title === x);
  //        console.log("restaurant", result);
  //        return result;




  ngOnInit() {
    //   this.animalMarker.getAnimalMarker().subscribe((data:any)=> {this.animalsMarkers = data
    //console.log("service sha8ala => " ,this.animalsMarkers)});
    this.serviceMarker.getAllServiceMarker().subscribe((data: any) => {
    this.servicesMarkers = data
      console.log("service sha8ala service => ", this.servicesMarkers)
    });
    this.animalMarker.getAnimalMarker().subscribe(res => {
      this.animalsMarkers = res.map(resMarker => {
        console.log("abl l return", resMarker);
       // let x: any = resMarker.Location;
        return {
          id: resMarker._id,
          Name: resMarker.Name,

          lat: parseFloat(resMarker.Location.Latitude),
          long: parseFloat(resMarker.Location.Longitude),
          Description: resMarker.Description,
         

        }
      });
      console.log("yaraaaaaab aafte maping", this.animalsMarkers);
    });

    this.serviceMarker.getAllServiceMarker().subscribe(res => {
      this.servicesMarkers = res.map(resMarker => {
        console.log("abl l return", resMarker);
        let x: any = resMarker.Location;
        return {
          id: resMarker._id,
          title: resMarker.Title,
          Location: resMarker.Location,
          Description: resMarker.Description,
          //image: resMarker.Image

        }
      });
      console.log("yaraaaaaab aafte maping", this.animalsMarkers);
    });

    // this.animalsMarkers = [{ longtitude: 7.809017, latitute: 51.678423, img: ''},
    //  { longtitude: 7.809027, latitute: 51.678418, img: '' }, 
    //  { longtitude: 7.809037, latitute: 51.678418, img: ''}];




    // getMarkers(): void {

    //   if (this.isAnimalsDisplayes) {
    //     this.getAnimalsMarkers();
    //   }
    //   // this.result.push(...this.getServiceMarkers());

    // }

    // getAnimalsMarkers(): void {
    //   if (this.isAnimalChecked) {
    //     this.animalsMarkers = [];
    //      this.isAnimalChecked = false;
    //   }
    //   else {
    //     this.animalsMarkers = [{ longtitude: 7.809017, latitute: 51.678423, img: '', service_type: null }, { longtitude: 7.809027, latitute: 51.678418, img: '', service_type: null }, { longtitude: 7.809037, latitute: 51.678418, img: '', service_type: null }];
    //     this.isAnimalChecked = true;
    //   }
    // }
    // getServiceMarkers(x): IMarker[] {
    //   let result: IMarker[] = [{ longtitude: 7.809017, latitute: 51.678425, img: '', service_type: ServiceType. }, { longtitude: 7.809027, latitute: 51.678419, img: '', service_type: ServiceType.INFORMATION }, { longtitude: 7.809037, latitute: 51.678428, img: '', service_type: ServiceType.REST }];
    //   return result.filter(b => b.service_type === x);
    // }
  }
}