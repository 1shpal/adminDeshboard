import {Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DeshboardComponent } from './deshboard/deshboard.component';
import { LeftnavComponent } from './leftnav/leftnav.component';
import { RouterModule,Routes } from '@angular/router';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import {MatCardModule} from '@angular/material/card';
import { EventEmitter } from '@angular/core';
import { AddProductComponent } from './deshboard/components/add-product/add-product.component';
import { AddCategoryComponent } from './deshboard/components/add-category/add-category.component';
import { ViewProductComponent } from './deshboard/components/view-product/view-product.component';
import { ViewCategoryComponent } from './deshboard/components/view-category/view-category.component';
import { EditProductComponent } from './deshboard/components/edit-product/edit-product.component';
import { EditCategoryComponent } from './deshboard/components/edit-category/edit-category.component';
import { ViewUserListComponent } from './deshboard/components/view-user-list/view-user-list.component';
import { UserSignInComponent } from './deshboard/user-sign-in/user-sign-in.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
const routes:Routes=[
  {
    path:'',
    component:DeshboardComponent,
    children:[
     { path:"addProduct",
      component:AddProductComponent,
      },
      {
        path:"editProduct",
        component:EditProductComponent
      },
      {
        path:"editCategory",
        component:EditCategoryComponent
      },
      {
        path:"editCategory",
        component:AddCategoryComponent
      },
      {
        path:"viewProduct",
        component:ViewProductComponent
      },
      {
        path:"viewCategory",
        component:ViewCategoryComponent
      },
      {
        path:"viewUserList",
        component:ViewUserListComponent
      },
      {
        path:"addCategory",
        component:AddCategoryComponent
      },
{
  path:"userSignIn",
component:UserSignInComponent
}      
    ]

  }
]

@NgModule({
  declarations: [
    DeshboardComponent,
    LeftnavComponent,
    AddProductComponent,
    AddCategoryComponent,
    ViewProductComponent,
    ViewCategoryComponent,
    EditProductComponent,
    EditCategoryComponent,
    ViewUserListComponent,
    UserSignInComponent
   
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatSidenavModule,
    MatListModule,
    MatCardModule,
    FormsModule,
    HttpClientModule
     
  ]
})
export class DeshboardModule { }
