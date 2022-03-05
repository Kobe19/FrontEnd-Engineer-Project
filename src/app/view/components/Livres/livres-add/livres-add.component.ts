import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-livres-add',
  templateUrl: './livres-add.component.html',
  styleUrls: ['./livres-add.component.scss']
})
export class LivresAddComponent implements OnInit {
  addlivresForm!: FormGroup;
  url= "http://localhost:8080/login";
  //encodedData = "Basic " + btoa(username:password)
  isFormSubmitted = false;

  

  constructor(private fb: FormBuilder, private _httpClient: HttpClient) { }

  ngOnInit() {
    // this._httpClient.post(this.url,"Authorization", encodedData);

    this.addlivresForm = this.fb.group({
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

    if (this.addlivresForm.invalid) {
      return;
    }
    console.log('Submit', this.addlivresForm.value);

    this.addlivresForm = this.fb.group({
      username: [''],
      password: [''],
    });     
}

}
