import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  getfromstorage():any{
    let users = localStorage.getItem("employee");
    return (users === null ? [] :JSON.parse(users));
  }

  login(username:any,password:any):any{
    let user = this.getfromstorage();
    let newuser = user.find((t:any)=>t.username == username.value && t.password==password.value);
    console.log(newuser);
    if(newuser){
      alert(" user authenticated successfully!!");
      this.router.navigate(['/home']);
    }
    else{
      alert("invalid username and password!!");
      
    }
  }
}
