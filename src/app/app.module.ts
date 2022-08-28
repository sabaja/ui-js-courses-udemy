import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CourseComponent } from './course/course.component';
import { HomepageComponent } from './homepage/homepage.component';
import { BackButtonDirective } from './directive/back-button.directive';

@NgModule({
  declarations: [
    AppComponent,
    CourseComponent,
    HomepageComponent,
    BackButtonDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
