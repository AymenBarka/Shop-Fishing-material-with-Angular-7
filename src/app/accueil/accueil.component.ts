import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.css']
})
export class AccueilComponent implements OnInit {
  mySlideImages = ['../../assets/image/SLIDER1.jpg','../../assets/image/SLIDER2.jpg'];
  myCarouselImages =['../../assets/image/SLIDER1.jpg','../../assets/image/SLIDER2.jpg'];
   
  mySlideOptions={items: 1, dots: true, nav: true};
  myCarouselOptions={items: 3, dots: true, nav: true}
  constructor() { }

  ngOnInit() {
  }

}
