import { Injectable } from '@angular/core';
import{HttpClient, HttpHeaders} from '@angular/common/http'
import { Users } from 'src/users';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { User } from './user';
import { Userfetch } from './userfetch';
import { Ufetch } from './ufetch';


@Injectable({
  providedIn: 'root'
})
export class SearchService {
  headers= new HttpHeaders().set('Content-Type','application/json')
  .set('Accept','application/json');
httpOptions={
headers:this.headers
}
  constructor(private http:HttpClient) { }

  url:string="http://localhost:3000/Users";

  getUsers(){

    return this.http.get<Users[]>(this.url);
  }
  
  
  createUser(user: Users) {
    return this.http.post(this.url, user);
  }

  getUpdateUser(id:number):Observable<Users>{
    return this.http.get<Users>(this.url + '/' + id,this.httpOptions);
  }
 
  updateUser(user:Ufetch):Observable<Users>{
    //const url='${this.url}/${user.id}';
    return this.http.put<Users>(this.url + '/' + user.id ,user,this.httpOptions).pipe(
      map(() => user)
    );
  }
 
 
  
  // getUserById(id: string):Observable<Users> {
  //   return this.http.get<Users>(this.url + '/' + id);
  // }
 
  
  getDetails() {
    return this.http.get<Users[]>(this.url);
 }
  
 
  deleteUser(id: number) {
    return this.http.delete(this.url + '/' + id);
  }
}
