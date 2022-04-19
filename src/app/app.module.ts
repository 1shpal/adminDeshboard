import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { UserService } from './deshboard/deshboard/user.service';
import { CategoryService } from './deshboard/deshboard/category.service';
import { ProductService } from './deshboard/deshboard/product.service';
import { TokenAuthService } from './token-auth.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [UserService,CategoryService,ProductService,TokenAuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
