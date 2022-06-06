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

  likesotrearray:any;
  bike='man';
  value_like = 0;
  panelOpenState = false;
  private baseurl:string= 'http://localhost:8080'; 
  // private baseurl:string= 'http://ec2-13-234-118-248.ap-south-1.compute.amazonaws.com:8080'; 

  course:any={
    name:'',
    id:'',
    };



  constructor(private http:HttpClient,private snackBar: MatSnackBar,public dialog: MatDialog) 
  {

    this.ratingArr = Array(this.starCount).fill(false);
    
  }

  ngOnInit(): void {
    var data_length:any;
  }

  public sendGetRequest(courses:any){
    let data = courses;
    return this.http.get(`${this.baseurl}/${data}`);
  }

  hellobro(){
    console.log("clicked");
    
  }
  
  coursedata:any;
  data_length:any;
  onSubmitTemplateBasedcourse(course:any){
    if(course.name == 'courses'){
      var result = this.sendGetRequest(course.name).subscribe((data:any)=>{
        this.coursedata = data;
        this.likesotrearray=Array(data.length).fill(0);
        this.snackBar.open("Book searched Successfully !! !!","cancel",{duration: 3000});

        },
        (error)=>{
          console.log(error.status);
          this.snackBar.open("Unable to search the Book, Try Again !!","cancel",{duration: 3000}); 
        }
        );
  
        console.log(this.coursedata);     

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

  returnStar(i: number,j:number) {
    
    if (this.rating[j] >= i + 1) {
      return 'star';
    } else {
      return 'star_border';
    }
  }

  onClick(i: number,j:number) {
    this.rating[j] = i + 1;
    console.log(j);
    console.log(this.rating);
    console.log(i);

  }

  openDailog(){
    this.dialog.open(DeletebookComponent, );
  }


  callmebefore(j:any, id:any){
    console.log(this.coursedata.length);
    
    console.log("likestorearray ",this.likesotrearray);
    
    this.callmefast(j,id,this.likesotrearray);
  }

  
  callmefast(j:any, id:any,likesotrearray:any){

    console.log("index ",j);
    console.log("id ", id);
    if(id == this.coursedata[j].id){
      
      // console.log("like value ",this.likevalue," index ",j);
      likesotrearray[j] = likesotrearray[j]+1;
      console.log(likesotrearray[j]);
      
      console.log(likesotrearray);
      
    }
    else{
      
    }

    
    

    
  }



  sources = [
    'https://source.unsplash.com/1600x900/?book,book?random=1',
    // 'https://source.unsplash.com/1600x900/?book,students',
    // 'https://source.unsplash.com/1600x900/?lovers,book',
    // 'https://source.unsplash.com/1600x900/?book,book',
    // 'https://source.unsplash.com/1600x900/?book,gods',
    // 'https://source.unsplash.com/1600x900/?soliders,book',
    // 'https://source.unsplash.com/1600x900/?book,book',
  ]
}





