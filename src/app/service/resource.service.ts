import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {AuthService} from "./auth.service";

@Injectable({
  providedIn: 'root'
})
export class ResourceService {

  readonly baseUrl = "http://localhost:4200/api";
  constructor(private  httpClient:HttpClient,private authService:AuthService) { }

  public getBookById(id:string):Observable<any> {
    const baseUrl = `${this.baseUrl}/books/${id}`
    return this.httpClient.get<Observable<any>>(baseUrl);
  }

  public getBookAll():Observable<any> {
    const baseUrl = `${this.baseUrl}/books/display`
    return this.httpClient.get<Observable<any>>(baseUrl);
  }

}
