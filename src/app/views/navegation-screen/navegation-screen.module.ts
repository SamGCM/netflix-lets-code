import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BannerAreaComponent } from '../../components/navegation-screen/banner-area/banner-area.component';
import { CarouselAreaComponent } from '../../components/navegation-screen/carousel-area/carousel-area.component';



@NgModule({
  declarations: [
    BannerAreaComponent,
    CarouselAreaComponent,
  ],
  imports: [
    CommonModule
  ]
})
export class NavegationScreenModule { }
