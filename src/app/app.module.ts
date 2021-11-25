import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HeaderComponent } from './components/header/header.component';
import { NavegationScreenModule } from './navegation-screen/navegation-screen.module';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    // NgbModule,
    NavegationScreenModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
