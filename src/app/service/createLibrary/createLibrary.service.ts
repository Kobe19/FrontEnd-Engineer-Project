import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {AuthService} from "../auth.service";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class createLibraryService {

  readonly baseUrl = "http://localhost:4200/api";
  constructor(private  httpClient:HttpClient,private authService:AuthService) { }

  public upload(formData:FormData){
    const url = `${this.baseUrl}/admin/books/add`
    return this.httpClient.post<Observable<any>>(url,formData);
  }
}
