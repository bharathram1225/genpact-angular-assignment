import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddbookComponent } from './addbook/addbook.component';
import { AppComponent } from './app.component';
import { CourseComponent } from './course/course.component';
import { CoursedetailsComponent } from './coursedetails/coursedetails.component';
import { HomeComponent } from './home/home.component';
import { PaymentsuccessComponent } from './paymentsuccess/paymentsuccess.component';
import { ResetComponent } from './reset/reset.component';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';
import { StudentdetailsComponent } from './studentdetails/studentdetails.component';

const routes: Routes = [

  {
    path:'courses',
    component:CourseComponent,
  },
  {
    path:'addbook',
    component:AddbookComponent,
  },
  {
    path:'app',
    component:AppComponent,
  },
  {
    path:'signin',
    component:SigninComponent,
  },
  {
    path:'',
    component:SignupComponent,
  },
  {
  path:'home',
  component:HomeComponent
  },
  {
  path:'reset',
  component:ResetComponent
  },
  {
    path:'studentdetails/:id',
    component:StudentdetailsComponent
  },
  {
    path:'coursedetails/:id',
    component:CoursedetailsComponent
  },
  {
    path:'paymentsuccess',
    component:PaymentsuccessComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
