import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'demo-carousel-basic',
  templateUrl: './noah-gabriel.component.html',
  styles: [`
    /deep/ .carousel.slide {
      position: relative;
      height: 100%;
    }

    /deep/ .carousel.slide .carousel-inner {
      position: relative;
      width: 100%;
      overflow: hidden;
      height: 100%;
    }

    /deep/ .carousel.slide .carousel-inner .carousel-item {
      position: relative;
      width: 100%;
      height: 100%;
    }
    
    /deep/ .carousel.slide .carousel-inner .carousel-item .item {
        width: 100%;
        height: 100%;
        position: absolute;
    }
    
    /deep/ .carousel.slide .carousel-inner .carousel-item .item .image {
        width: 100%;
        height: 100%;
        position: absolute;
        background-size: cover;
        background-repeat: no-repeat;
        background-position: center;
    }
  `]
  //styleUrls: ['./noah-gabriel.component.scss']
})
export class NoahGabrielComponent {

  myInterval = 0;

  slides = [
    {image: '../../assets/images/merci1.jpg'},
    {image: '../../assets/images/ruby.jpg'}  
  ];

  

}
