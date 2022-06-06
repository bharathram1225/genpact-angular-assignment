import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import {MatSnackBar} from '@angular/material/snack-bar';
import { AnimationDurations } from '@angular/material/core';

@Component({
  selector: 'app-addbook',
  templateUrl: './addbook.component.html',
  styleUrls: ['./addbook.component.css']
})
export class AddbookComponent implements OnInit {


  baseURL: string = "http://localhost:8080/courses";
  // baseURL: string = "http://ec2-13-234-118-248.ap-south-1.compute.amazonaws.com:8080/courses";
  headermargin = 'ml-4';
  panelOpenState = true;


  addbook = {
    author: {author_id: 23, author_name: '', language: ''},
    discription: "",
    id: 24,
    title: ""
  }
  

  public sendGetRequest(book:any){
    const headers = { 'content-type': 'application/json'} 
    return this.http.post(this.baseURL,book,{'headers':headers});
  }

  onSubmitTemplateBasedAddBook(addbook:any){
    console.log("from form",addbook.title);
    console.log("from form",addbook.discription);
    console.log("from form",addbook.author_name);
    console.log("from form",addbook.language);
    console.log("from component",this.addbook.author);
    console.log("from form",addbook.author);
    console.log("from component",this.addbook);
    console.log("from form",addbook);

    const result = this.sendGetRequest(this.addbook).subscribe((data:any)=>{
      this.snackBar.open("Book Saved Successfully !! !!","cancel",{duration: 3000});
      },
      (error)=>{
        console.log(error.status);
        this.snackBar.open("Unable to Save The Book !!","cancel",{duration: 3000});

      }
      );

      console.log("received from server: ",result);
      

  }

  constructor(private http:HttpClient,private snackBar: MatSnackBar) { }

  ngOnInit(): void {
  }

}
