import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'

@Component({
  selector: 'app-animal-details',
  templateUrl: './animal-details.component.html',
  styleUrls: ['./animal-details.component.css']
})
export class AnimalDetailsComponent implements OnInit {

  constructor(private actRoute: ActivatedRoute) {

  }
  ngOnInit() {
    console.log(this.actRoute.snapshot.params['id'])


  }

}

