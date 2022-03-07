import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {userService} from "../../../service/users/user.service";

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

  

  constructor(private fb: FormBuilder, private _httpClient: HttpClient, private userService:userService) { }

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

  onFileChange(event:any) {
    // @ts-ignore
    if (event.target != null && event.target.files.length > 0) {
      const file = event.target.files[0]
      this.adduserForm.patchValue({
        ajout: file
      });
    }
  }

  submitForm(){

    // Set flag to true
    this.isFormSubmitted = true;

    if (this.adduserForm.invalid) {
      return;
    }
    const formdata = new FormData();
    formdata.append("name",this.adduserForm.get("name")?.value)
    formdata.append("surname",this.adduserForm.get("surname")?.value)
    formdata.append("email",this.adduserForm.get("email")?.value)
    formdata.append("phone",this.adduserForm.get("phone")?.value)
    formdata.append("adress",this.adduserForm.get("adress")?.value)
    formdata.append("password",this.adduserForm.get("password")?.value)
    formdata.append("profileImage",this.adduserForm.get("profileImage")?.value);

    this.userService.upload(formdata).subscribe(response =>{
      console.log(response)
      if (response) {
        window.alert("upload success")
      }
    })
    //clear the form after validating it
    // this.adduserForm = this.fb.group({
    //   name: [''],
    //   isbn: [''],
    //   year: [''],
    //   genre: [''],
    //   auteur: [''],
    //   description: [''],
    //   ajout: [''],
    //   publication: ['']
    // });
}

}
