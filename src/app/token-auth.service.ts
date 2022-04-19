import { HttpHandler, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TokenAuthService {
  constructor() { }
  intercept(req: HttpRequest<any>, next: HttpHandler){
    let tokenizedRequest=req.clone({
      setHeaders:{
        Authorization:""+localStorage.getItem("token-jwt")

      }
    }); 
    return next.handle(tokenizedRequest);

      
      
  }
}
