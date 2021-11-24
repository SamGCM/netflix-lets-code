import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
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

  signupForm!:FormGroup;

  constructor(private loginService: LoginService, private fb:FormBuilder, private router:Router) { }

  ngOnInit(): void {
    this.signupForm = this.fb.group({
        email: ['', [Validators.required, Validators.email]],
        password: ['', [Validators.required, Validators.minLength(4), Validators.maxLength(60)]]
    })
  }

  login(){
    this.loginService.login(this.user);
    this.router.navigate(['/']);

  }

}
