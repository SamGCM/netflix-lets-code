import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { NavegationScreenModule } from './views/navegation-screen/navegation-screen.module';

const routes: Routes = [
  {path: 'navegation-screen', component: NavegationScreenModule}
];

@NgModule({
  declarations: [

  ],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
