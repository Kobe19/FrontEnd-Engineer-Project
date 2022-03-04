import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  public saveUser(username:string,password:string) {
    localStorage.setItem("username",username);
    localStorage.setItem("password",username);
  }

  public getUser() {
    return {"username":localStorage.getItem("username"),"password":localStorage.getItem("password")}
  }
}
