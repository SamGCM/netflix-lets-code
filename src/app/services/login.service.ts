import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../models/user/user.model';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http:HttpClient) { }

  login(user:User) {
    return this.http.post('https://private-3923c4-santandercoders809.apiary-mock.com/login', user).subscribe((response) => {
      console.log(response);
    }, error => {
      console.log(error.message);
    });
  }
}
