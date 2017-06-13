import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-animal-slidder',
  templateUrl: './home-animal-slidder.component.html',
  styleUrls: ['./home-animal-slidder.component.css']
})
export class HomeAnimalSlidderComponent {
//The time to show the next photo
    private NextPhotoInterval:number = 3000;
    //Looping or not
    private noLoopSlides:boolean = false;
    //Photos
    private slides:Array<any> = [];

    constructor() {
            this.addNewSlide();
    }

    private addNewSlide() {
         this.slides.push(
            {image:'https://images7.alphacoders.com/503/503155.jpg',text:'Animal 1'},
            {image:'https://i.ytimg.com/vi/tyNxm1rl_j4/maxresdefault.jpg',text:'Animal 2'},
            {image:'http://awesomwallpaper.com/img2/F219719471D0F7B1/wildcat.jpg',text:'Animal 3'},
            {image:'http://wallpapercave.com/wp/4gv8Ih6.jpg',text:'Animal 4'},
            // {image:'http://www.angulartypescript.com/wp-content/uploads/2016/03/car5.jpg',text:'BMW 5'},
            // {image:'http://www.angulartypescript.com/wp-content/uploads/2016/03/car6.jpg',text:'BMW 6'}
        );
    }

    private removeLastSlide() {
        this.slides.pop();
    }

}


