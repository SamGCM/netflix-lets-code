import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-carousel',
  templateUrl: './card-carousel.component.html',
  styleUrls: ['./card-carousel.component.scss']
})
export class CardCarouselComponent implements OnInit {

  @Input() cards: string

  imageForCard: string

  constructor() { }

  ngOnInit(): void {
    this.imageForCard = this.cards
  }

}
