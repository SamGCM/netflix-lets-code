import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-banner-area',
  templateUrl: './banner-area.component.html',
  styleUrls: ['./banner-area.component.scss']
})
export class BannerAreaComponent implements OnInit {
  modalOpen = false;

  constructor() { }

  ngOnInit(): void {
  }

}
