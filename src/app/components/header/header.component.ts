import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  // @ViewChild('header') header;

  // mudaHeader() {
  //   if(window.pageXOffset > 0) {
  //     this.header.nativeElement.classList.add('header-scroll')
  //   } else {
  //     this.header.nativeElement.classList.remove('header-scroll')
  //   }
  // }

  // document.addEventListener('scroll', mudaHeader)

  constructor() { }

  ngOnInit(): void {
  }

}
