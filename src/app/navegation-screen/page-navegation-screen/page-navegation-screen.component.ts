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

  card: IDataSerie[] = []

  user: string = 'a'

  ngOnInit(): void {
    this.getDataUser()
  }

  getDataUser() {
    // this.service.getSeries(1)
    //   .subscribe( data => console.log(data))
    this.service.getSeries(1)
      .subscribe( data => this.card.push(data))
  }

}
