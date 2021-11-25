import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BannerAreaComponent } from './banner-area/banner-area.component';
import { ButtonComponent } from 'src/app/components/button/button.component';
import { PageNavegationScreenComponent } from './page-navegation-screen/page-navegation-screen.component';
import { CarouselAreaComponent } from './carousel-area/carousel-area.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    BannerAreaComponent,
    CarouselAreaComponent,
    PageNavegationScreenComponent,
    ButtonComponent
  ]
})
export class NavegationScreenModule { }
