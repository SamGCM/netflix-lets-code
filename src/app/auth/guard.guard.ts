import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private router: Router, private authService: AuthService){}


  checkIfUserIsLoggedIn() {
    return localStorage.getItem('letsflix')
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    this.authService.url = state.url
    
    const shouldProceed = Boolean(this.checkIfUserIsLoggedIn())
    if(shouldProceed) return shouldProceed;
    return this.router.parseUrl('/login');
  }
  
}
