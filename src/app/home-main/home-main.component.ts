import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-home-main',
  templateUrl: './home-main.component.html',
  styleUrls: ['./home-main.component.css','../../assets/css/mystyle.css','../../assets/css/home.css']
})
export class HomeMainComponent implements OnInit {

  constructor() { }

  ngOnInit() {
       if ($('html').hasClass('csstransforms3d')) {
                $('.artGroup').removeClass('slide').addClass('flip');
                $('.artGroup.flip').on('mouseenter',
                    function () {
                        $(this).find('.artwork').addClass('theFlip');
                    });
                $('.artGroup.flip').on('mouseleave',
                    function () {
                        $(this).find('.artwork').removeClass('theFlip');
                    });
            } else {
                $('.artGroup').on('mouseenter',
                    function () {
                        $(this).find('.detail').stop().animate({ bottom: 0 }, 500, 'easeOutCubic');
                    });
                $('.artGroup').on('mouseleave',
                    function () {
                        $(this).find('.detail').stop().animate({ bottom: ($(this).height() + -1) }, 500, 'easeOutCubic');
                    });
            }

            

  }

}
