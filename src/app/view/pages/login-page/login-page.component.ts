import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
<<<<<<< HEAD:src/app/view/pages/login-page/login-page.component.ts
import {IUser} from "../../../models/IUser";
import {AuthService} from "../../../service/auth/auth.service";
import {Router} from "@angular/router";
=======
import { AuthService } from 'src/app/service/auth.service';
import { Router } from '@angular/router';
import { loginService } from 'src/app/service/Login/login.service';
>>>>>>> origin/nnew-deve:src/app/view/components/login-page/login-page.component.ts
@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {
  loginForm!: FormGroup;
  isFormSubmitted = false;


<<<<<<< HEAD:src/app/view/pages/login-page/login-page.component.ts

  constructor(private fb: FormBuilder, private authService:AuthService, private router:Router) { }
=======
  constructor(private fb: FormBuilder, private _httpClient: HttpClient, private loginService:loginService) { }
>>>>>>> origin/nnew-deve:src/app/view/components/login-page/login-page.component.ts

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
<<<<<<< HEAD:src/app/view/pages/login-page/login-page.component.ts
    const formData = new FormData();
    formData.set("email",this.loginForm.get('username')?.value)
    formData.set("password",this.loginForm.get('password')?.value)
    const user:IUser = {email:this.loginForm.get('username')?.value,password:this.loginForm.get('password')?.value}
    this.authService.login(formData).subscribe(response => {
      if (response.status == 200){
        localStorage.setItem("token",response.data);
        this.router.navigateByUrl("")
      }else {
        window.alert("Username or password incorrect")
      }
    })
=======

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
>>>>>>> origin/nnew-deve:src/app/view/components/login-page/login-page.component.ts
  }

}
