import { Component, OnInit } from '@angular/core';
import { Location } from "@angular/common";
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  url:string = ''
  links: Array<string[]> = []
  isHidden:string = ''
  LinksForPaths: Object = {
    '/' : [
      [
        "Perguntas frequentes", "Relação com investidores", 
        "Formas de assistir", "Informações corporativas", "Só na Netflix"
      ],
      [
        "Centro de ajuda", "Carreiras", 
        "Termos de uso", "Entre em contato"
      ],
      [
        "Conta", "Resgatar cartão pré-pago", 
        "Privacidade", "Teste de velocidade"
      ],
      [
        "Imprensa", "Comprar cartão pré-pago", 
        "Preferências de cookies", "Avisos legais"
      ]
    ],
    '/login': [
      [
        "Perguntas frequentes", "Preferências de cookies"
      ],
      [
        "Centro de ajuda", "Informações corporativas"
      ],
      [
        "Termos de uso"
      ],
      [
        "Privacidade"
      ]
    ]
  } 

  constructor(private location: Location, private router: Router) { }

  ngOnInit(): void {
    this.verifyRoute()
  }

  verifyRoute(){
    this.router.events.subscribe((event) => {
      if(event instanceof NavigationEnd){
        this.url = event.url
        this.getLinksForFooter()
      }{null}
    })
  }
  
  getLinksForFooter(){
    console.log(this.url)
    if(this.LinksForPaths[this.url] !== undefined){
    const listLinks = this.LinksForPaths[this.url]
    this.links = listLinks
    } else {
      this.isHidden = 'isHidden'
    }
  }
}
