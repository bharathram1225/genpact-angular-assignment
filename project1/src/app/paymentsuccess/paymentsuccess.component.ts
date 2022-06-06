import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';



@Component({
  selector: 'app-paymentsuccess',
  templateUrl: './paymentsuccess.component.html',
  styleUrls: ['./paymentsuccess.component.css']
})
export class PaymentsuccessComponent implements OnInit {

  payment_order_id:any;
  payment_payment_id:any;


  constructor(private route: ActivatedRoute,private router:Router) { }

  ngOnInit(): void {

  }

  back(){
    this.router.navigate(['/home']);
  }

}
