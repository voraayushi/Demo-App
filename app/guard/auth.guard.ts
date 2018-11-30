import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import {AuthService} from '../service/auth/auth.service';
import {Router} from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private auth:AuthService,private route:Router){}
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
      // console.log('this.auth.isLoggednIn()',this.auth.isLoggednIn())
      // if(this.auth.isLoggednIn()){
      //   console.log("in guard",this.auth.isLoggednIn);
      //   return true;
      // }
      // else{
      //   this.route.navigate['/login'];
      //   console.log("in guarddddddd",this.auth.isLoggednIn())
      //   return false;
      // }

      // console.log('this.auth.isLoggednIn()', this.auth.isLoggednIn())
        if (this.auth.isLoggednIn()) {
            return true;
        } else {
            this.route.navigate(['/login']);
            return false;
        }
  }
}
