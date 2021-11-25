import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BannerAreaComponent } from './banner-area/banner-area.component';
import { PageNavegationScreenComponent } from './page-navegation-screen/page-navegation-screen.component';
import { CarouselAreaComponent } from './carousel-area/carousel-area.component';
import { ButtonComponent } from '../components/button/button.component';
import { CardCarouselComponent } from './card-carousel/card-carousel.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    BannerAreaComponent,
    CarouselAreaComponent,
    ButtonComponent,
    PageNavegationScreenComponent,
    CardCarouselComponent,
  ]
})
export class NavegationScreenModule { }
