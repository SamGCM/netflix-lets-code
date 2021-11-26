import { Component, Input, OnInit } from '@angular/core';
import { IUserSeries } from 'src/app/interfaces/userSeries';
import { CardsService } from 'src/app/services/cards.service';

@Component({
  selector: 'app-carousel-area',
  templateUrl: './carousel-area.component.html',
  styleUrls: ['./carousel-area.component.scss']
})
export class CarouselAreaComponent implements OnInit {

  @Input() title!: string;
  @Input() cardsId: any;


  seriesData: any[] = []

  constructor(private service: CardsService) { }

  ngOnInit(): void {
    this.getSeries()
  }

  getSeries() {
    this.cardsId.split(',').map((item) => {
      this.service.getSeries(item).subscribe(data => {
        console.log(data)
        this.seriesData.push(data)
      })
    })
  }

}
