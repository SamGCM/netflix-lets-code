import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { User } from 'src/app/models/user/user.model';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  showInfo = false;

  user:User = new User();
  email:string =  this.user.email ;
  password:string = this.user.password ;

  signupForm: FormGroup;

  constructor(private loginService: LoginService) { }

  ngOnInit(): void {
      this.signupForm = new FormGroup({
        'email': new FormControl(null),
        'password': new FormControl(null)
  })
}
  login(){
    this.loginService.login(this.user)
  }

}
