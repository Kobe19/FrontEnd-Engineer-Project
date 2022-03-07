import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {AuthService} from "../auth.service";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class loginService {

  readonly baseUrl = "http://localhost:4200/api";
  constructor(private  httpClient:HttpClient, private authService:AuthService) { }

  public upload(formData:FormData){
    const url = `${this.baseUrl}/signin`
    return this.httpClient.post<Observable<any>>(url,formData);
  }
}
