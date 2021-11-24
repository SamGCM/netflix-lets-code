import { Component, OnInit, ElementRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

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

  constructor(private route: ActivatedRoute, private el: ElementRef) {}

  tabs = ["Início", "Séries", "Filmes", "Bombando", "Minha lista"];
  
  ngOnInit(): void {
    this.url = this.route.snapshot.routeConfig?.path!
    this.verifyRoute()
  }
  
  verifyRoute() {
    this.url === 'rota' //Adicionada rota correta para aparecer a navabar completa
      ? this.navComplete = true
      : this.navComplete = false 
  }
  
  showOrHidden(){
    this.isHidden = this.isHidden === "show"
      ? "hidden"
      : "show"
  }


}
