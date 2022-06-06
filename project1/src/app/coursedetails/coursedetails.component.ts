import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {MatSnackBar} from '@angular/material/snack-bar';
import { MatDialog} from '@angular/material/dialog';
import { Router, ActivatedRoute } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AnyCatcher } from 'rxjs/internal/AnyCatcher';
import { AuthService } from '../auth.service';


@Component({
  selector: 'app-coursedetails',
  templateUrl: './coursedetails.component.html',
  styleUrls: ['./coursedetails.component.css']
})
export class CoursedetailsComponent implements OnInit {

  razorpay_payment_id:any;
  courseauthordetails:any;
  private baseurl:string= 'http://localhost:8080/courses'; 
  private baseurlpayment:string = 'http://localhost:8080/courses/payment';
  author_id:any;
 

  constructor(private http:HttpClient,private snackBar: MatSnackBar,private router:Router,private route: ActivatedRoute,private auth:AuthService) { 
    console.log("hi");
    const author_id = this.route.snapshot.paramMap.get('id');  // id hai
    console.log(author_id);
    this.author_id = author_id;
  }

  ngOnInit(): void {
    console.log("ID",this.author_id);
    console.log("hello");
    this.callmefast();

  }
  

  callmefast(){
      var result = this.sendGetRequest(this.author_id).subscribe((data:any)=>{
        this.courseauthordetails = data;
        console.log(this.courseauthordetails);
        console.log(this.courseauthordetails.id);
        console.log(this.courseauthordetails.title);
        console.log(this.courseauthordetails.discription);
        console.log(this.courseauthordetails.author.author_id);
        console.log(this.courseauthordetails.author.author_name);
        console.log(this.courseauthordetails.author.language);

        this.snackBar.open("Book searched Successfully !! !!","cancel",{duration: 3000});
        },
        (error)=>{
          console.log(error.status);
          this.snackBar.open("Unable to search the Book, Try Again !!","cancel",{duration: 3000}); 
        }
        );
  }


  public sendGetRequest(id:any){
    console.log(this.author_id);
    let data = id;
    return this.http.get(`${this.baseurl}/${data}`);
  }

  mydonateform = new FormGroup ({
      "donate": new FormControl("", Validators.compose([Validators.required,Validators.minLength(0)]))
    })


  ondenote(){
    this.paymentstart(this.mydonateform.value);

    const result = this.sendPaymentRequest(this.mydonateform.value).subscribe((data:any)=>{
      this.snackBar.open("successfully sent !! !!","cancel",{duration: 3000});

      console.log(data);
      console.log(data.amount);
      console.log(data.amount_due);
      console.log(data.id);
      
      if(data.status == 'created'){
        alert("order has been created successfully !!");

        var options = {
          "key": "rzp_test_RspZitrCm5wfTl", 
          "amount": data.amount, 
          "currency": "INR",
          "name": "Bharath & Co",
          "description": "Course purchase",
          "image": "https://example.com/your_logoimage.png",
          "order_id": data.id,

          "handler":function(data:any){
            console.log("payment id: ",data.razorpay_payment_id)
            console.log(data.razorpay_order_id);
            console.log(data.razorpay_signature);

            if (typeof data.razorpay_payment_id == 'undefined' ||  data.razorpay_payment_id < 1 || rzp.razorpay_order_id == 'undefined') {
              var redirect_url =  '/courses';
            } else {
              alert("successfully paid");
              redirect_url = '/paymentsuccess';
            }
            window.location.href = redirect_url;

            
            
          },
          "prefill": {
            "name": "R Bharath",
            "email": "rbharath.mca20@gmail.com",
            "contact": "9874974391"
          },
          "notes": {
            "address": "#13/1 srinivas store, delhi 526197"
          },
            "theme": {
            "color": "#3399cc"
          }
        };

       
        let rzp = new this.auth.nativeWindow.Razorpay(options);


        rzp.on('payment.success', function (data:any){
          console.log(data.error.code);
          console.log(data.error.description);
          console.log(data.error.source);
          console.log(data.error.step);
          console.log(data.error.reason);
          console.log(data.error.metadata.order_id);
          console.log(data.error.metadata.payment_id);
          alert("oops payment failed");
        });
        rzp.open();
      }
      
      },
      (error)=>{
        console.log(error.status);
        this.snackBar.open("Unsuccessfull !!","cancel",{duration: 3000});

      }
      );

      
      
   
  }

  paymentstart(amount:any){ 
    
    (amount.donate===''|| amount.donate===null)?alert("error"):alert(amount.donate);
    return;
    
  }

  public sendPaymentRequest(amount:any){
    const headers = { 'content-type': 'application/json'} 
    return this.http.post(this.baseurlpayment,{'amount':amount.donate},{'headers':headers});
  }

   



}




