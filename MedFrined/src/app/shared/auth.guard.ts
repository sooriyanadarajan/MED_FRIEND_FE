// import { Injectable } from '@angular/core';
// import { CanActivate, Router, Route, UrlSegment, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
// import { Observable } from 'rxjs';
// // import { CookieService } from 'ngx-cookie-service';

// import {AuthSerice} from './auth.service';
// @Injectable({
//   providedIn: 'root'
// })
// export class AuthGuard implements CanActivate{
//   private location: string = '';
  
//   constructor( private myRoute: Router,private authcheck:AuthSerice,) {}

//   canActivate(
//     route: ActivatedRouteSnapshot,
//     state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
//       this.location = state.url;
//       return this.authentication();
//   }
//   canActivateChild(
//     next: ActivatedRouteSnapshot,
//     state: RouterStateSnapshot
// ):
//     | Observable<boolean | UrlTree>
//     | Promise<boolean | UrlTree>
//     | boolean
//     | UrlTree {
//     this.location = state.url;
//     return this.authentication();
// }

//   authentication() {
//     let val = this.authcheck.isLoggednIn();
//     if (val) {
//         return true;
//     } 
//     else {
//         this.myRoute.navigate(['/auth/login']);
//         return false;
//     }
//   }
// }

