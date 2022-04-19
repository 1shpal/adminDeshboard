import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  apiUrlin="http://localhost:3000/admin/login";
            
  constructor(private Uhttp:HttpClient) {  }
  userapiservice(e:string,p:string):Observable<any>{
    return this.Uhttp.post(this.apiUrlin,{email:e,password:p})
  } 
  
  check(e:string,p:string):Observable<any>{
    return this.Uhttp.post(this.apiUrlin,{email:e,password:p})
  }

cheackToken():boolean{
 return  !!localStorage.getItem('token-jwt');
}
}
