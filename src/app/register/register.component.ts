import { Component, OnInit,Input } from '@angular/core';
import {​​​​​​​​ EmailValidator }​​​​​​​​ from'@angular/forms';
import { LoginService } from '../login.service';
import { User } from '../user';
import { Userfetch } from '../userfetch';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  user: User[]=[];
userfetch:Userfetch;
username: string

pass: string
 loginas: string
// mail: EmailValidator
  @Input("name") Username: string='';
  @Input("password") password: string='';
   @Input("LoginAs") LoginAs: string='';
  
  // @Input("email") email: string='';
  
// errorMessage='Invalid Credentials'
// invalidLogin=false

  
    
  // errorMessage='Invalid Credentials'
  // invalidLogin=false
  constructor(private loginService: LoginService) {​​​​​​​​ 

  }​​​​​​​​
   
  ngOnInit():void {​​​​​​​​
   
    }​​​​​​​​
//   reg(){​​​​​​​​
//   console.log(this.username);
//  console.log(this.pass);
//   console.log(this.loginas);
  
//   alert("Registered Successfully")

//   this.user=new User(this.username,this.password,this.loginas)

//   this.loginService.createUser(this.user)
   
//   //  for( ){​​​​​​​​
   
//    }​​​​​​​​

   reg(){
    console.log(this.username);
     console.log(this.pass);
       console.log(this.loginas);
   this.userfetch=new User(this.username,this.pass,this.loginas)

    this.loginService.createUser(this.userfetch).subscribe(data=>{
    });
    this.getUsers();
    alert("Submitted successfully")
  }
  getUsers(){
    this.loginService.getUsers().subscribe((response)=>{
      this.user=response;
    });
}
}