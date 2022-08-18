import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Observable } from 'rxjs';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CourseComponent } from './course/course.component';

@NgModule({
  declarations: [
    AppComponent,
    CourseComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [Observable],
  bootstrap: [AppComponent]
})
export class AppModule { }
