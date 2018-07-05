import { Injectable } from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { LoginService } from '../services/login/login.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  returnValue: boolean;

  constructor( private router: Router,  private loginService: LoginService ) { }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    this.loginService.isUserLoggedIn().subscribe(e => {

      this.returnValue = !!e;
      if (e) {
        return true;
      } else {
        this.router.navigate(['/login']);
        return false;
      }

    });

    this.loginService.isUserLoggedIn().subscribe((e) => {
      this.returnValue = !!e;
      if (e) {
        return true;
      } else {
        this.router.navigate(['/login']);
        return false;
      }
    });

    return this.returnValue;
  }
}
