import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BookService } from 'src/app/service/book/book.service';

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

  

  constructor(private fb: FormBuilder, private _httpClient: HttpClient, private bookService:BookService) { }

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

//   submitForm(){

//     // Set flag to true
//     this.isFormSubmitted = true;

//     if (this.addlivresForm.invalid) {
//       return;
//     }
//     console.log('Submit', this.addlivresForm.value);

//     //clear the form after validating it
//     this.addlivresForm = this.fb.group({
//       name: [''],
//       isbn: [''],
//       year: [''],
//       genre: [''],
//       auteur: [''],
//       description: [''],
//       ajout: [''],
//       publication: ['']
//     });     
// }

onFileChange(event:any) {
  // @ts-ignore
  if (event.target != null && event.target.files.length > 0) {
    const file = event.target.files[0]
    this.addlivresForm.patchValue({
      ajout: file
    });
  }
}

submitForm(){

  // Set flag to true
  this.isFormSubmitted = true;

  if (this.addlivresForm.invalid) {
    return;
  }
  const formdata = new FormData();
  formdata.append("name",this.addlivresForm.get("name")?.value)
  formdata.append("isbn",this.addlivresForm.get("isbn")?.value)
  formdata.append("year",this.addlivresForm.get("year")?.value)
  formdata.append("genre",this.addlivresForm.get("genre")?.value)
  formdata.append("auteur",this.addlivresForm.get("auteur")?.value)
  formdata.append("description",this.addlivresForm.get("description")?.value)
  formdata.append("ajout",this.addlivresForm.get("ajout")?.value);
  formdata.append("publication",this.addlivresForm.get("publication")?.value)

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
