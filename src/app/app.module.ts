import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { NavegationScreenModule } from './views/navegation-screen/navegation-screen.module';
import { HeaderComponent } from './components/basics/header/header.component';
import { PageNavegationScreenComponent } from './components/navegation-screen/page-navegation-screen/page-navegation-screen.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    NavegationScreenModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
