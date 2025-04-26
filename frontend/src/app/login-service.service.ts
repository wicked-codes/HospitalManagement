import { Injectable } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
import { User } from '../app/app.component';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class LoginServiceService {
  private authLogin = 'api/auth/login';
  
  constructor(private http: HttpClient) { 

  }

  submitlogin(userDetails: User) {


    return this.http.post(this.authLogin, userDetails, httpOptions)
  }

}
