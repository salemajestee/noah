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
    { image: '../../assets/images/Florence/1.jpg'},
    { image: '../../assets/images/Florence/2.jpg' },
    { image: '../../assets/images/Florence/3.jpg' },
    { image: '../../assets/images/Florence/4.jpg' },
    { image: '../../assets/images/Florence/5.jpg' },
    { image: '../../assets/images/Florence/6.jpg' },
    { image: '../../assets/images/Florence/7.jpg' },
    { image: '../../assets/images/Florence/8.jpg' },
    { image: '../../assets/images/Florence/9.jpg' },
    { image: '../../assets/images/Florence/10.jpg' },
    { image: '../../assets/images/Florence/11.jpg' },
    { image: '../../assets/images/Florence/12.jpg' },
    { image: '../../assets/images/Florence/13.jpg' },
    { image: '../../assets/images/Florence/14.jpg' },
    { image: '../../assets/images/Florence/15.jpg' },
    { image: '../../assets/images/Florence/16.jpg' },
    { image: '../../assets/images/Florence/17.jpg' },
    { image: '../../assets/images/Florence/18.jpg' },
    { image: '../../assets/images/Florence/19.jpg' },
    { image: '../../assets/images/Florence/20.jpg' },
    { image: '../../assets/images/Florence/21.jpg' },
    { image: '../../assets/images/Florence/22.jpg' },
    { image: '../../assets/images/Florence/23.jpg' },
  ];

  

}
