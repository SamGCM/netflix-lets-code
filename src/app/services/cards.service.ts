import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IDataSerie } from '../interfaces/dataSerie';
import { IUserSeries } from '../interfaces/userSeries';

@Injectable({
  providedIn: 'root'
})
export class CardsService {

  constructor(private http: HttpClient,) { }
  
  getDetailsOfSeriesUser(userId: number) {
    return this.http.get(`https://private-3923c4-santandercoders809.apiary-mock.com/users/${userId}`)
  }

  getSeries(serieId: number){
    return this.http.get<IDataSerie>(`https://private-3923c4-santandercoders809.apiary-mock.com/series/${serieId}`)
  }


}
