import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-browse',
  templateUrl: './browse.component.html',
  styleUrls: ['./browse.component.scss']
})
export class BrowseComponent implements OnInit {
  users = [];

  constructor(private loginService:LoginService) { }

  ngOnInit(): void {
    this.loginService.getUserInfo().subscribe(response => {
      console.log(response.users)
      this.users = response.users
    })
  }




}
