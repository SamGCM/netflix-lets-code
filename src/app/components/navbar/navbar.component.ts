import { Component, OnInit, ElementRef } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  url:string = ''
  menuHidden: boolean = true;
  navComplete: boolean = false
  isHidden: string = "hidden"

  constructor(private route: Router, private el: ElementRef) {}

  tabs = ["Início", "Séries", "Filmes", "Bombando", "Minha lista"];
  
  ngOnInit(): void {
    this.verifyRoute()
  }
  
  verifyRoute(){
    this.route.events.subscribe((event) => {
      if(event instanceof NavigationEnd){
        this.url = event.url
        this.url === '/navegation-screen'
          ? this.navComplete = true
          : this.navComplete = false 
      }{null}
    })
  }
  
  showOrHidden(){
    this.isHidden = this.isHidden === "show"
      ? "hidden"
      : "show"
  }


}
