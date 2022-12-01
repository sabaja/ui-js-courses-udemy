import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CourseComponent } from './course/course.component';
import { HomepageComponent } from './homepage/homepage.component';
import { MainLoginComponent } from './main-login/main-login.component';

const routes: Routes = [
   { path: '', pathMatch: 'full', redirectTo: 'home' },
  // { path: 'home', component: HomepageComponent }, 
  {  path:'courses', component: CourseComponent},
  { path: 'login', component: MainLoginComponent },
  { path: 'courses', component: CourseComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
