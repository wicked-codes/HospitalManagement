import { Component, OnInit } from '@angular/core';
import { LoginServiceService } from '../login-service.service';
import { User } from '../app.component';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  userDetails : User = {
    email: "",
    password : ""
  };




  constructor(private loginService: LoginServiceService) {

    
   }

  ngOnInit(): void {
  } 
  onSubmit() {
    this.loginService.submitlogin(this.userDetails).subscribe(response => {
      let data = response;
    });
  }

}
