import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'trial';
  salary = '94000.345';
  package = '1140000.9874';
  currentdate = new Date();
  age:number=10;
  

  project:any={
    name:'google project',
    version:'1.0',
    completiondate: new Date()
  };

  showAlert():void{
    alert("You have clicked");
  }

  employees:any[] = [
    {id:1,name:"bharath",age:24,college:"RVCE",photo:"https://media.istockphoto.com/photos/focused-cute-stylish-african-american-female-student-with-afro-picture-id1311107708?s=612x612"},
    {id:1,name:"Uday",age:28,college:"BMSIT",photo:""},
    {id:1,name:"Kiran",age:21,college:"MSRIT",photo:""},
  ];

  student:any[] = [
    {id:1,fname:"bharath",lname:"ram", designation:"developer",mobile:"9876543210",email:"bharathram@gmail.com"},
    {id:2,fname:"Uday",lname:"Kiran", designation:"Devops",mobile:"9876543210",email:"udaykiran@gmail.com"},
    {id:3,fname:"Sham",lname:"Roy", designation:"Analyst",mobile:"9876543210",email:"shamroy@gmail.com"},
    {id:4,fname:"Manoj",lname:"Kumar", designation:"signer",mobile:"9876543210",email:"manojkumar@gmail.com"},

  ];

//   thisValue = 1;

//   checkme(element:any, index:any, array:any){
//     // console.log(element.id);
//     if(element.id != this.thisValue){
      
//         return element;
//     }
//     else{
//       console.log(element.id);
//     }
// }

  deletedata(id:any):any{
    // this.thisValue = id;
    // this.student = this.student.filter(this.checkme, this.thisValue);
    //     console.log(this.student);
  }

  user: any = JSON.parse(localStorage.getItem('student_user') as string);

  getfromstorage() {
    let users = localStorage.getItem("student_user");
    return (users === null ? [] :JSON.parse(users));
  }

  addstorage(fname:any,lname:any,designation:any,phone:any,email:any):any{
   let user = this.getfromstorage();
   localStorage.setItem('student_user', JSON.stringify(
     [...user, {"id":(user.length === 0 ? 10 : user[user.length - 1].id + 1),"fname":fname.value,"lname":lname.value,"designation":designation.value,"phone":phone.value,"email":email.value}]
   ));
   console.log(localStorage.getItem('student_user'));
   this.router.navigate(["/about"]);
  }


  deletestorage(id:any){
    let user = this.getfromstorage();
    let newuser = user.filter((ele:any)=>{
      if(ele.id != id){
        return ele;
      }
    });

    localStorage.setItem('student_user',JSON.stringify(newuser));
    
  }

 

  editstorage(id:number,fname:any,lname:any,designation:any,phone:any,email:any){
    console.log(id+" "+fname+" "+lname);
    let student_user = this.getfromstorage();
    
    let newuser = student_user.map((ele:any)=>{
      console.log(ele.id+" "+id);
      
      if(ele.id == id)
      {
        console.log(ele.id);
        return {'id':id,'fname':fname,'lname':lname,'designation':designation,'phone':phone,'email':email};
      } 
      else 
        return ele;
    });
    console.log(newuser);
    localStorage.setItem('student_user',JSON.stringify([...newuser]));
    alert("set successfully ");
    this.router.navigate(["/about"]);
  }


  alertme(user:any){
    let val = user.value;
    alert("your name is"+val)
  }

  colorname:any="green";
  fontsize:any=12;

  changecolor(clr:any){
    this.colorname=clr.value;
  }

  changerange(fontsize:any){
    this.fontsize=fontsize.value;
  }

  

  navigatetonext():void{
    this.router.navigate(["/about"]);
  }
 
  inputNo?:number=2;

  constructor(private router:Router){
    setTimeout(() => {
      this.title = "bharath";
      this.salary = "120000.34734";
      this.package= '1500000.873483';

    }, 2000);
  }


  setlocalstorage(keyname:any, valuename:any):any{
    localStorage.setItem(keyname.value,valuename.value);
    alert("Successfully added !!");
    return valuename.value="";
  }

  getlocalstorage(keyname:any):any{
    let value = localStorage.getItem(keyname.value);
    console.log(value);
    alert(value);
    return keyname.value="";
  }




}
