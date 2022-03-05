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
      isbn: ['', Validators.required],
      year: ['', [Validators.required]],
      genre: ['', Validators.required],
      auteur: ['', [Validators.required]],
      description: ['', Validators.required],
      ajout: ['', Validators.required],
      publication: ['', Validators.required]

    });
  }

  submitForm(){

    // Set flag to true
    this.isFormSubmitted = true;

    if (this.addlivresForm.invalid) {
      return;
    }
    console.log('Submit', this.addlivresForm.value);

    //clear the form after validating it
    this.addlivresForm = this.fb.group({
      name: [''],
      isbn: [''],
      year: [''],
      genre: [''],
      auteur: [''],
      description: [''],
      ajout: [''],
      publication: ['']
    });     
}
}
