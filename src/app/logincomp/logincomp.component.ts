import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { Router } from '@angular/router';
import { LoginService } from '../login.service';
import { User } from '../user';
import { Userfetch } from '../userfetch';

@Component({
  selector: 'app-logincomp',
  templateUrl: './logincomp.component.html',
  styleUrls: ['./logincomp.component.scss']
})
export class LogincompComponent implements OnInit {

//   strTextBox: string
// endTextBox: string

//   @Input("name") userName: string='';
//   @Input("paas") password: string='';
  
 
// // errorMessage='Invalid Credentials'
// // invalidLogin=false
// constructor(private router:Router) {​​​​​​​​ }​​​​​​​​
 
// ngOnInit():void {​​​​​​​​
//   }​​​​​​​​
// Login(){​​​​​​​​
// console.log(this.strTextBox);
// console.log(this.endTextBox);

// //this.router.navigateByUrl("/search");
// //  for( ){​​​​​​​​
 
 //}​​​​​​​​
 formSubmitted = false;
  userArray: Userfetch[] = [];
  userForm = new FormGroup({
    username: new FormControl('', [Validators.required, Validators.maxLength(10)]),
    password: new FormControl('', [Validators.required]),
    loginAs: new FormControl('', Validators.required)
  });

  constructor(private router: Router, private loginService: LoginService) {
  }

  getUsers(): void {
    this.loginService.getUsers().subscribe((data: any) => {
      console.log("data" + data.length);
      this.userArray = data;
    })
  }

  ngOnInit(): void{
    this.getUsers();
  }

  get password(): any {
    return this.userForm ? this.userForm.get('password') : null;
  }

  get username(): any {
    return this.userForm ? this.userForm.get('username') : null;
  }

  get loginAs(): any {
    return this.userForm ? this.userForm.get('loginAs') : null;
  }

  onSubmit(): void {
    this.formSubmitted = true;
    if (this.userForm.valid && this.doLoginValidation()) {
        this.logData();
        if(this.loginAs.value === "member"){
          this.router.navigateByUrl('home/best');
      
        }else{
          this.router.navigateByUrl('home/librarianaccount');
        }
        
    } else {
      this.resetForm();
      this.formSubmitted = false;
    }
  }

  doLoginValidation() : any{
    let isTrue:boolean=false;
    this.userArray.forEach((element:User) => { console.log(element.id, element.username)});
    const username = this.username.value;
    const password = this.password.value;
    const loginAs = this.loginAs.value;
    for (let user of this.userArray) {
      if (user.username === username && user.password === password && user.loginAs === loginAs) {
       // this.id = user.id;
        console.log("inside if " + user.username, user.password, user.loginAs);
        isTrue = true;
        break;
      } else {
        
        console.log("inside else " + user.username, user.password, user.loginAs);
        
        continue;
      }
    }

    return isTrue;
  }

  resetForm() {
    this.userForm.reset();
  }

  logData() {
    console.log('Username:' + this.username.value);
    console.log('password:' + this.password.value);
    console.log('LoginAs:' + this.loginAs.value);
  }
 
}
