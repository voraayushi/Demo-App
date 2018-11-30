import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { 

  }
  setStatus(token: string) {
    console.log("token",token);
    localStorage.setItem("LoggedInUser", token)
  }
  getStatus() {
    return localStorage.getItem("LoggedInUser")
  }
  isLoggednIn() {
    return this.getStatus() !== null;
  }
  // logout() {
  //   localStorage.removeItem("LoggedInUser");
  //   this.myRoute.navigateByUrl("/login");
  // }
}
