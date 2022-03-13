import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {BookService} from "../../../service/book/book.service";
import format from "@popperjs/core/lib/utils/format";

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

  constructor(private fb: FormBuilder, private _httpClient: HttpClient, private bookService:BookService) { }

  ngOnInit() {

    this.addlivresUsersForm = this.fb.group({
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

  onFileChange(event:any) {
    // @ts-ignore
    if (event.target != null && event.target.files.length > 0) {
      const file = event.target.files[0]
      this.addlivresUsersForm.patchValue({
        ajout: file
      });
    }
  }

  submitForm(){

    // Set flag to true
    this.isFormSubmitted = true;

    if (this.addlivresUsersForm.invalid) {
      return;
    }
    const formdata = new FormData();
    formdata.append("name",this.addlivresUsersForm.get("name")?.value)
    formdata.append("isbn",this.addlivresUsersForm.get("isbn")?.value)
    formdata.append("year",this.addlivresUsersForm.get("year")?.value)
    formdata.append("genre",this.addlivresUsersForm.get("genre")?.value)
    formdata.append("auteur",this.addlivresUsersForm.get("auteur")?.value)
    formdata.append("description",this.addlivresUsersForm.get("description")?.value)
    formdata.append("ajout",this.addlivresUsersForm.get("ajout")?.value);
    formdata.append("publication",this.addlivresUsersForm.get("publication")?.value)

    this.bookService.upload(formdata).subscribe(response =>{
      console.log(response)
      if (response) {
        window.alert("upload success")
      }
    })
    //clear the form after validating it
    // this.addlivresUsersForm = this.fb.group({
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
