// import { CanActivateFn } from '@angular/router';

// export const authGuard: CanActivateFn = (route, state) => {
//   return true;
// };


import { CanActivate, CanActivateFn, Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { AuthService } from '../services/auth/auth.service';

// export const authGuard: CanActivateFn = (route, state) => {
//   return true;
// };

@Injectable({
  providedIn:'root'
})

export class AuthGuard implements CanActivate {
  constructor(private Authservice: AuthService, private router: Router) {}
  canActivate(): boolean {
    if (!this.Authservice.getToken()) {
      this.router.navigateByUrl("/login");
      }
      return this. Authservice.getToken();
  }  
}