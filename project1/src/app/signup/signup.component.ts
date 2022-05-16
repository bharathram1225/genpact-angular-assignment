import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  getfromstorage() {
    let users = localStorage.getItem("employee");
    return (users === null ? [] :JSON.parse(users));
  }

  signup(username:any,password:any):any{
    let user = this.getfromstorage();
    localStorage.setItem('employee', JSON.stringify(
      [...user, {"id":(user.length === 0 ? 1 : user[user.length - 1].id + 1),"username":username.value,"password":password.value}]
    ));
    console.log(localStorage.getItem('student_user'));
    this.router.navigate(['/signin']);
  };

}
