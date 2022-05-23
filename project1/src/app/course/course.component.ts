import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {MatSnackBar} from '@angular/material/snack-bar';
import { MatDialog} from '@angular/material/dialog';
import { DeletebookComponent } from '../deletebook/deletebook.component';


@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {

  bike='man';
  panelOpenState = false;
  private baseurl:string= 'http://localhost:8080'; 

  course:any={
    name:'',
    id:'',
    };

  constructor(private http:HttpClient,private snackBar: MatSnackBar,public dialog: MatDialog) 
  {
    this.ratingArr = Array(this.starCount).fill(false);
    
  }

  ngOnInit(): void {
    
  }

  public sendGetRequest(courses:any){
    let data = courses;
    return this.http.get(`${this.baseurl}/${data}`);
  }

  
  coursedata:any;
  onSubmitTemplateBasedcourse(course:any){
    if(course.name == 'courses'){
      var result = this.sendGetRequest(course.name).subscribe((data:any)=>{
        this.coursedata = data;
        this.snackBar.open("Book searched Successfully !! !!","cancel",{duration: 3000});
        },
        (error)=>{
          console.log(error.status);
          this.snackBar.open("Unable to search the Book, Try Again !!","cancel",{duration: 3000}); 
        }
        );
  
        console.log(this.coursedata);
        // for (const element of this.coursedata) {
        //   console.log("id: "+element.id);
        //   console.log("discription :-"+element.discription);
        //   console.log("author id :-"+element.author.author_id);
        //   console.log("author name :-"+element.author.author_name);
        //   console.log("language :-"+element.author.language);
  
        // }

    }
    else if(course.name == 'courses' && course.id){
      console.log("matched "+this.coursedata.id);
    }
    else{
      this.snackBar.open("Invalid Course name provided !!","cancel",{duration:3000});
    }

    
  } 

  
  


  starCount = 5;
  rating: Number[] = Array(this.starCount).fill(0);

  ratingArr: boolean[] = []; // true = solid star; false = empty star

  snackBarDuration = 1000;
  response = [
    'You broke my heart!',
    'Really?',
    'We will do better next time.',
    'Glad you like it!',
    'Thank you so much!'
  ]

  returnStar(i: number,j:number) {
    
    if (this.rating[j] >= i + 1) {
      return 'star';
    } else {
      return 'star_border';
    }
  }

  onClick(i: number,j:number) {
    this.rating[j] = i + 1;

  }



  openDailog(){
    this.dialog.open(DeletebookComponent, );
  }

}



