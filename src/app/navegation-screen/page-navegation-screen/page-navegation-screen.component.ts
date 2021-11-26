import { Component, OnInit } from '@angular/core';
import { IDataSerie } from 'src/app/interfaces/dataSerie';
import { IUserSeries } from 'src/app/interfaces/userSeries';
import { CardsService } from 'src/app/services/cards.service';

@Component({
  selector: 'app-page-navegation-screen',
  templateUrl: './page-navegation-screen.component.html',
  styleUrls: ['./page-navegation-screen.component.scss']
})
export class PageNavegationScreenComponent implements OnInit {

  constructor(private service: CardsService) { }

  cards: any

  popular: any

  keepWatching: any

  dataSeries: IDataSerie[] = []

  ngOnInit(): void {
    this.getDataUser()
  }
  
  getDataUser() {
    this.service.getDetailsOfSeriesUser(1)
    .subscribe( data => {
      this.popular = data['popular']
      this.keepWatching = data['keepWatching']
    })
  }
}
