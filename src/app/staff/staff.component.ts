import { Component, OnInit } from '@angular/core';

@Component({
  // moduleId:module.id,
  selector: 'app-staff',
  templateUrl: './staff.component.html',
  styleUrls: ['./staff.component.css','../../assets/css/didyouknow.css','../../assets/css/flexslider.css','../../assets/css/animate.css']
})
export class StaffComponent implements OnInit {

  constructor() { }

  ngOnInit() {

    // $('#teamSlider').flexslider({
    //   animation: "slide",
    //   directionNav: false,
    //   controlNav: true,
    //   touch: true,
    //   pauseOnHover: true,
    //   start: function () {
    //     $.waypoints('refresh');
    //   }
    // });

  }

}
