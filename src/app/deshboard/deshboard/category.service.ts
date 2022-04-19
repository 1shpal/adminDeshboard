import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

 
  addImage="https://angularapi-api.herokuapp.com/api/category/add";
  viewCategory="http://localhost:3000/admin/view-category";
  deletecategory="https://angularapi-api.herokuapp.com/api/category/delete-category";
  public responseCache = new Map();

 constructor(private _http:HttpClient) { }
 addCategory(imagedata:any):Observable<any>{
   return this._http.post(this.addImage,imagedata)
 }
 viewCategoryf():Observable<any>{ 
   const categorysFromCache = this.responseCache.get(this.viewCategory);
   if (categorysFromCache) {
     return of (categorysFromCache);
   }
   const response = this._http.get<any>(this.viewCategory);
   response.subscribe(categorys => this.responseCache.set(this.viewCategory, categorys)
   
   );
  
   return response;
 }
 deleteCategory(CID:any):Observable<any>{
   return this._http.post(this.deletecategory,{id:CID});
 }

}
