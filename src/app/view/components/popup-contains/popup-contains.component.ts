import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-popup-contains',
  templateUrl: './popup-contains.component.html',
  styleUrls: ['./popup-contains.component.scss']
})
export class PopupContainsComponent implements OnInit {
  adduserForm!: FormGroup;
  url= "http://localhost:8080/login";
  //encodedData = "Basic " + btoa(username:password)
  isFormSubmitted = false;

  

  constructor(private fb: FormBuilder, private _httpClient: HttpClient) { }

  ngOnInit() {
    // this._httpClient.post(this.url,"Authorization", encodedData);

    this.adduserForm = this.fb.group({
      name: ['', [Validators.required]],
      surname: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', Validators.required],
      address: ['', [Validators.required]],
      password: ['', Validators.required],
      profileImage: ['']

    });
  }

  submitForm(){

    // Set flag to true
    this.isFormSubmitted = true;

    if (this.adduserForm.invalid) {
      return;
    }
    console.log('Submit', this.adduserForm.value);

    this.adduserForm = this.fb.group({
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
