import { Component, OnInit, ElementRef } from '@angular/core';
import { Location } from "@angular/common";

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

  constructor(private location: Location, private el: ElementRef) {}

  tabs = ["Início", "Séries", "Filmes", "Bombando", "Minha lista"];
  
  ngOnInit(): void {
    this.url = this.location.path()
    this.verifyRoute()
  }
  
  verifyRoute() {
    this.url === '/navegation-screen'
      ? this.navComplete = true
      : this.navComplete = false 
  }
  
  showOrHidden(){
    this.isHidden = this.isHidden === "show"
      ? "hidden"
      : "show"
  }


}
