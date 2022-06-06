import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-deletebook',
  templateUrl: './deletebook.component.html',
  styleUrls: ['./deletebook.component.css']
})
export class DeletebookComponent implements OnInit {

  baseURL: string = "http://localhost:8080/courses";
  // baseURL: string = "http://ec2-13-234-118-248.ap-south-1.compute.amazonaws.com:8080/courses";
  

  course:any = {
    id:''
  }

  constructor(private http:HttpClient,private snackBar: MatSnackBar) { }

  ngOnInit(): void {
  }

  public sendGetRequest(id:any){
    id = id;
    return this.http.delete(`${this.baseURL}/${id}`);
  }

  onSubmitTemplateBasedDelete(course:any){
    const result = this.sendGetRequest(this.course.id).subscribe((data:any)=>{
      this.snackBar.open("Book Deleted Successfully !! !!","cancel",{duration: 3000});
      },
      (error)=>{
        console.log(error.status);
        this.snackBar.open("Unable to Delete The Book !!","cancel",{duration: 3000});
  
      }
      );
  
      console.log("received from server: ",result);
  }

  styleheader = {
    'text-align':'center',
    'font-weight':'bold'
  }

}
