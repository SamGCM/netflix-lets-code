import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
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
  signupForm!:FormGroup;
  user:User = new User();

  constructor(private loginService: LoginService, private fb:FormBuilder, private router:Router) { }

  customValidator(control: AbstractControl){
    let email = Validators.email(control)
    let number = Validators.pattern("[0-9]{11}")(control)
    if(email == null || number == null) {
      return null
    } else {
      return {...email, ...number}
    }
  }

  ngOnInit(): void {
    this.signupForm = this.fb.group({
        email: ['', [Validators.required, this.customValidator]],
        password: ['', [Validators.required, Validators.minLength(4), Validators.maxLength(60)]]
    })
  }

  login(){
    this.loginService.login(this.user).subscribe(response => {
      this.loginService.setUser(response);
      this.router.navigate(['/browse']);
    })
  }

}
