import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Userfetch } from '../userfetch';

@Component({
  selector: 'app-mylog',
  templateUrl: './mylog.component.html',
  styleUrls: ['./mylog.component.scss']
})
export class MylogComponent implements OnInit {
 formGroup:FormGroup;
  constructor(private _auth:AuthService) { 

    
  }

  ngOnInit(): void {
    this.initForm()
  }
 initForm(){
   this.formGroup =new FormGroup({
    username: new FormControl('',[Validators.required]),
     password: new FormControl('',[Validators.required]),
     loginAs: new FormControl('',[Validators.required] )
   })
 }

 loginProcess(){
   if(this.formGroup.valid){
     this._auth.login(this.formGroup.value).subscribe(result=>{
       if(result.success){
         console.log(result);
        alert(result.message);
      }else{
        alert(result.meassage);
      }

     })
   }
 }
  // loginUser(){
  //   //console.log(this.loginUserData)
  //   this._auth.login()
  //   .subscribe(
  //     res =>console.log(res),
  //     err =>console.log(err)
  //   )
  // }
}
