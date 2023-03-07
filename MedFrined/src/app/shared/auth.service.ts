import { Injectable } from "@angular/core";
import { Router } from '@angular/router';
@Injectable({providedIn:"root"})

export class AuthSerice{
    constructor(private router: Router,) {}

    isLoggedIn:boolean=false;
   
    isLoggednIn() {
        // localStorage.setItem('token',this.cookie.get('token'));
      return (
         localStorage.getItem('token') != ''
    );
    }

    isAlreadyLoggedIn():any {
        if (this.isLoggednIn()) this.router.navigate(['']);
    }

}