import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNavegationScreenComponent } from './navegation-screen/page-navegation-screen/page-navegation-screen.component';

const routes: Routes = [
  {path: 'navegation-screen', component: PageNavegationScreenComponent}
];

@NgModule({
  declarations: [

  ],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
