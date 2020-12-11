import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Users } from 'src/users';
import { User } from './user';
import { Userfetch } from './userfetch';
import {map} from "rxjs/operators";
@Injectable({
  providedIn: 'root'
})
export class LoginService {

  // userArray: User[] =[];
  // constructor(private httpClient: HttpClient) { }

  // getUsers(): Promise<User[]>{

  //   this.httpClient.get("http://localhost:3000/user.json").subscribe((data: any) => {
  //     this.userArray = data;
  //     // console.log("hello" + this.userArray.length);
  //   });
  //   return Promise.resolve(this.userArray);

  //   // this.httpClient.get("./assets/user.json").subscribe((data: any )=> this.userArray = data);
  //   // return Promise.resolve(this.userArray);
  // }
  headers= new HttpHeaders().set('Content-Type','application/json')
  .set('Accept','application/json');
httpOptions={
headers:this.headers
}
constructor(private http:HttpClient) { }

url:string="http://localhost:3000/credential";

  // getUsersData(){
  //   return this.httpClient.get("http://localhost:3000/user.json");
  // }

  // createUser(data:User){
  //   console.log("Hi")
  //   return this.httpClient.post('http://localhost:3000/user.json',data)
      
    
  // }

  getUsers(){
    return this.http.get<User[]>(this.url);
  }
  createUser(user: User) {
    return this.http.post(this.url, user);
  }
  // getUser(){
  //   return this.http.get<Users[]>(this.url);
  // }
  

  // getUpdateUser(id:number):Observable<User>{
  //   return this.http.get<User>(this.url + '/' + id,this.httpOptions);
  // }
 
  // updateUser(user:Userfetch):Observable<User>{
  //   //const url='${this.url}/${user.id}';
  //   return this.http.put<Users>(this.url + '/' + user.id ,user,this.httpOptions).pipe(
  //     map(() => user)
  //   );
  // }
 
 
  
  // // getUserById(id: string):Observable<Users> {
  // //   return this.http.get<Users>(this.url + '/' + id);
  // // }
 
  
 
  
 
  // deleteUser(id: number) {
  //   return this.http.delete(this.url + '/' + id);
  // }
}
