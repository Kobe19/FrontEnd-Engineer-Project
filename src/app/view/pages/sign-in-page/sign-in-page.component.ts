import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

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

  

  constructor(private fb: FormBuilder, private _httpClient: HttpClient) { }

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
    console.log('Submit', this.SignupForm.value);

    this.SignupForm = this.fb.group({
      name: [''],
      surname: [''],
      email: [''],
      phone: [''],
      adress: [''],
      password: [''],
      profileImage: ['']
    });     
}
}
