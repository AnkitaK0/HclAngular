import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private _loginUrl="http://localhost:3000/credential";
  constructor(private http: HttpClient) { }

  login(data):Observable<any>{
    console.log("I am a server")
   return this.http.post(this._loginUrl,data);
  }
}
