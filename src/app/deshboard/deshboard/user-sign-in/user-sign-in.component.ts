import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-sign-in',
  templateUrl: './user-sign-in.component.html',
  styleUrls: ['./user-sign-in.component.css']
})
export class UserSignInComponent implements OnInit {

  userEmail="";
   userPassword="";
  constructor(private _service:UserService,private router:Router) { }
  userSignIn(){
    this._service.check(this.userEmail,this.userPassword).subscribe(result=>{
      if(result){
        console.log(result);
        localStorage.setItem('admin-id',result.CurrentUser._id);
        localStorage.setItem('token-jwt',result.token);
        alert("your login sucessfull");
        this.router.navigate(['addProduct']);
      }
        else
        alert("your login failed");
    });
  }
  

  ngOnInit(): void {
  }

}
