import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-carousel-area',
  templateUrl: './carousel-area.component.html',
  styleUrls: ['./carousel-area.component.scss']
})
export class CarouselAreaComponent implements OnInit {

  @Input() title!: string;
  @Input() cards: any;

  data: any

  constructor() { }

  ngOnInit(): void {
    this.data = this.cards[0].cardImage
  }

}
