import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth/guard.guard';
import { BrowseComponent } from './components/browse/browse.component';
import { LoginComponent } from './components/login/login.component';
import { PageNavegationScreenComponent } from './navegation-screen/page-navegation-screen/page-navegation-screen.component';
import { HomeComponent } from './views/home/home.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'login', component: LoginComponent},
  {path: 'navegation-screen', component: PageNavegationScreenComponent, canActivate: [AuthGuard]},
  {path: 'browse', component: BrowseComponent, canActivate: [AuthGuard]},
];

@NgModule({
  declarations: [

  ],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
