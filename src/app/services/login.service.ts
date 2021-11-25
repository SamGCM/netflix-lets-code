import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../models/user/user.model';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http:HttpClient) { }

  login(user:User) {
    return this.http.post('https://private-3923c4-santandercoders809.apiary-mock.com/login', user, {responseType: 'text'}).subscribe((response) => {
      console.log(response);
      // the response is broken, insert missing comma
      let comma_location = response.search("user") - 2
      response = response.slice(0, comma_location) + "," + response.slice(comma_location)
      return JSON.parse(response);
    });
  }
}
