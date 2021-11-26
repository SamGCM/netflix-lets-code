import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IDataSerie } from '../interfaces/dataSerie';

@Injectable({
  providedIn: 'root'
})
export class CardsService {

  dataSeriesUser: {popular: number[], keepWatching: number[]}

  dataSerie: {
    cardImage: string,
    titleImage: string,
    backgroundImage: string,
    relevance: number,
    year: number,
    minAge: number,
    time: number,
    season: any,
    description: string,
    cast: string[],
    genre: string[],
    scenes: string[],
  }

  constructor(private http: HttpClient,) { }
  
  getDetailsOfSeriesUser(userId: number) {
    return this.http.get(`https://private-3923c4-santandercoders809.apiary-mock.com/users/${userId}`)
  }

  getSeries(serieId: number){
    return this.http.get<IDataSerie>(`https://private-3923c4-santandercoders809.apiary-mock.com/series/${serieId}`)
  }


}
