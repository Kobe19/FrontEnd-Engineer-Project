import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-book-users',
  templateUrl: './add-book-users.component.html',
  styleUrls: ['./add-book-users.component.scss']
})
export class AddBookUsersComponent implements OnInit {
  addlivresUsersForm!: FormGroup;
  url= "http://localhost:8080/login";
  //encodedData = "Basic " + btoa(username:password)
  isFormSubmitted = false;

  

  constructor(private fb: FormBuilder, private _httpClient: HttpClient) { }

  ngOnInit() {
    // this._httpClient.post(this.url,"Authorization", encodedData);

    this.addlivresUsersForm = this.fb.group({
      name: ['', [Validators.required]],
      isbn: ['', Validators.required],
      year: ['', [Validators.required, Validators.email]],
      date: ['', Validators.required],
      genre: ['', Validators.required],
      auteur: ['', [Validators.required]],
      Description: ['', Validators.required],
      profileImage: ['']

    });
  }

  submitForm(){

    // Set flag to true
    this.isFormSubmitted = true;

    if (this.addlivresUsersForm.invalid) {
      return;
    }
    console.log('Submit', this.addlivresUsersForm.value);

    this.addlivresUsersForm = this.fb.group({
      username: [''],
      password: [''],
    });     
}

}
