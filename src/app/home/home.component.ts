import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  items: any = [
    {
      title: "Aproveite na TV.",
      description: "Assista em Smart TVs, Playstation, Xbox, Chromecast, Apple TV, aparelhos de Blu-ray e outros dispositivos.",
      image: '../../../assets/images/tv1.svg',
      direction: 'left'
    },
    {
      title: "Baixe séries para assistir offline.",
      description: "Salve seus títulos favoritos e sempre tenha algo para assistir.",
      image: '../../../assets/images/mobile.svg',
      direction: 'right'
    },
    {
      title: "Assista quando quiser.",
      description: "Assista no celular, tablet, Smart TV ou notebook sem pagar a mais por isso.",
      image: '../../../assets/images/devices.svg',
      direction: 'left'
    },
    {
      title: "Crie perfis para crianças.",
      description: "Deixe as crianças se aventurarem com seus personagens favoritos em um espaço feito só para elas, sem pagar a mais por isso.",
      image: '../../../assets/images/kids.svg',
      direction: 'right'
    }
  ]

  constructor(private service: LoginService, private router: Router) { }

  ngOnInit(): void {
    this.verifyLogin()
  }

  verifyLogin() {
    this.service.getUsers() 
      ? this.router.navigate(['/browse'])
      : null
  }

}
