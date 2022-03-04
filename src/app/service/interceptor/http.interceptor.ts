import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent, HttpHeaders
} from '@angular/common/http';
import { Observable } from 'rxjs';
import {AuthService} from "../auth.service";

@Injectable()
export class HttpInterceptor implements HttpInterceptor {

  constructor(private authService:AuthService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    request.headers.append("Authorization",`Basic username=${this.authService.getUser().username} password=${this.authService.getUser().password}`)
    return next.handle(request);
  }



}
