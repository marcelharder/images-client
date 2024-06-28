import { Component, OnInit } from '@angular/core';
import { dropItem } from '../_models/dropItem';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  selectedSeries = "";
  Series:Array<dropItem> = [];

  slides: {image: string; text?: string}[] = [
    {image: 'assets/images/baden-baden/0.jpg',text: "Aan de wandel"},
    {image: 'assets/images/baden-baden/1.jpg', text: "Waar is mijn bier ?"},
    {image: 'assets/images/baden-baden/0.jpg'}
  ];
  activeSlideIndex = 0;

  constructor() {
   
     
  }

  ngOnInit() {
  }
  

}
