import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {createLibraryService} from "../../../service/createLibrary/createLibrary.service";

@Component({
  selector: 'app-ajout-bibliotheque',
  templateUrl: './ajout-bibliotheque.component.html',
  styleUrls: ['./ajout-bibliotheque.component.scss']
})
export class AjoutBibliothequeComponent implements OnInit {
  LibraryForm!: FormGroup;
  url= "http://localhost:8080/login";
  //encodedData = "Basic " + btoa(username:password)
  isFormSubmitted = false;

  constructor(private fb: FormBuilder, private _httpClient: HttpClient, private createLibraryService:createLibraryService) { }

  ngOnInit(): void {

    this.LibraryForm = this.fb.group({
      libraryname: ['', Validators.required],
      librarylogo: ['', Validators.required],
    });
    
  }

  submitForm(){

    // Set flag to true
    this.isFormSubmitted = true;

    if (this.LibraryForm.invalid) {
      return;
    }
    const formdata = new FormData();
    formdata.append("libraryname",this.LibraryForm.get("libraryname")?.value)
    formdata.append("librarylogo",this.LibraryForm.get("librarylogo")?.value)

    this.createLibraryService.upload(formdata).subscribe(response =>{
      console.log(response)
      if (response) {
        window.alert("upload success")
      }
    })
    
}

}
