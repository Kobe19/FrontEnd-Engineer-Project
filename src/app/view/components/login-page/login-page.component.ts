import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/service/auth.service';
import { Router } from '@angular/router';
import { loginService } from 'src/app/service/Login/login.service';
@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {
  loginForm!: FormGroup;
  url= "http://localhost:8080/login";
  //encodedData = "Basic " + btoa(username:password)
  isFormSubmitted = false;

  

  constructor(private fb: FormBuilder, private _httpClient: HttpClient, private loginService:loginService) { }

  ngOnInit() {
    // this._httpClient.post(this.url,"Authorization", encodedData);

    this.loginForm = this.fb.group({
      username: ['', [Validators.required]],
      password: ['', Validators.required],
    });

    // this.loginForm = new FormGroup({
    //   'username' : new FormControl(null, [Validators.required, Validators.minLength(4)]),
    //   'password' : new FormControl(null, [Validators.required, Validators.minLength(4)])
    // })
  }



  submitForm(){

    this.isFormSubmitted = true;

    if (this.loginForm.invalid) {
      return;
    }
    const formdata = new FormData();
    formdata.append("username",this.loginForm.get("username")?.value)
    formdata.append("password",this.loginForm.get("password")?.value)

    this.loginService.upload(formdata).subscribe(response =>{
      console.log(response)
      if (response) {
        window.alert("upload success")
      }
    });   
  }

}
