import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BannerAreaComponent } from '../../components/navegation-screen/banner-area/banner-area.component';
import { CarouselAreaComponent } from '../../components/navegation-screen/carousel-area/carousel-area.component';
import { PageNavegationScreenComponent } from 'src/app/components/navegation-screen/page-navegation-screen/page-navegation-screen.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    BannerAreaComponent,
    CarouselAreaComponent,
    PageNavegationScreenComponent
  ],
  exports: [
    PageNavegationScreenComponent
  ]
})
export class NavegationScreenModule { }
