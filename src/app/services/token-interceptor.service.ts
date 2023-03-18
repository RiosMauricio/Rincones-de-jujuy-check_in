import { HttpEvent, HttpHandler, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LoginService } from './login.service';

@Injectable({
  providedIn: 'root'
})
export class TokenInterceptorService {

  constructor(private logS: LoginService) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>>{
    const tokenizeReq = req.clone({ 
      setHeaders:{ Authorization: this.logS.getToken()
     } });
     return next.handle(tokenizeReq);
  }
}
