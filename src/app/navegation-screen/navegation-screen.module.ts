import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BannerAreaComponent } from './banner-area/banner-area.component';
import { PageNavegationScreenComponent } from './page-navegation-screen/page-navegation-screen.component';
import { CarouselAreaComponent } from './carousel-area/carousel-area.component';
import { ButtonComponent } from '../components/button/button.component';
import { CardCarouselComponent } from './card-carousel/card-carousel.component';
import { ModalComponent } from './modal/modal.component';

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
    ModalComponent,
  ]
})
export class NavegationScreenModule { }
