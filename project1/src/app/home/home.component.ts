import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {



  ngOnInit(): void {
  }


  constructor(private router:Router){

  }

  user: any = JSON.parse(localStorage.getItem('employee_user') as string);
  
  

}
