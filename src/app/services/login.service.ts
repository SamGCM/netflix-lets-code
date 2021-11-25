import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../models/user/user.model';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  userInfo:Observable<any>;

  constructor(private http:HttpClient) { }

  login(user:User) {
    return this.http.post('https://private-3923c4-santandercoders809.apiary-mock.com/login', user).pipe((response) => {
      this.userInfo = response;
      return response
    });
  }

  getUserInfo(){
    return this.userInfo
  }
}
