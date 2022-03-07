import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { adminRegisterService } from 'src/app/service/adminRegister/adminRegister.service';

@Component({
  selector: 'app-sign-in-page',
  templateUrl: './sign-in-page.component.html',
  styleUrls: ['./sign-in-page.component.scss']
})
export class SignInPageComponent implements OnInit {
  SignupForm!: FormGroup;
  url= "http://localhost:8080/login";
  //encodedData = "Basic " + btoa(username:password)
  isFormSubmitted = false;

  

  constructor(private fb: FormBuilder, private _httpClient: HttpClient, private adminRegisterService:adminRegisterService) { }

  ngOnInit() {
    // this._httpClient.post(this.url,"Authorization", encodedData);

    this.SignupForm = this.fb.group({
      name: ['', [Validators.required]],
      surname: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', Validators.required],
      adress: ['', [Validators.required]],
      password: ['', Validators.required],
      profileImage: ['']

    });
  }

  submitForm(){

    // Set flag to true
    this.isFormSubmitted = true;

    if (this.SignupForm.invalid) {
      return;
    }
    const formdata = new FormData();
    formdata.append("name",this.SignupForm.get("name")?.value)
    formdata.append("surname",this.SignupForm.get("surname")?.value)
    formdata.append("email",this.SignupForm.get("email")?.value)
    formdata.append("phone",this.SignupForm.get("phone")?.value)
    formdata.append("adress",this.SignupForm.get("adress")?.value)
    formdata.append("password",this.SignupForm.get("password")?.value)
    formdata.append("profileImage",this.SignupForm.get("profileImage")?.value);

    this.adminRegisterService.upload(formdata).subscribe(response =>{
      console.log(response)
      if (response) {
        window.alert("upload success")
      }
    });     
}
}
