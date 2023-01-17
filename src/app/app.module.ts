import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpInterceptorService } from './service/httpInterceptor.service';
import { HttpClientModule, HTTP_INTERCEPTORS }    from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CourseComponent } from './course/course.component';
import { HomepageComponent } from './homepage/homepage.component';
import { BackButtonDirective } from './directive/back-button.directive';
import { RatingComponent } from './rating/rating.component';
import { NgxStarRatingModule } from 'ngx-star-rating'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NavbarComponent } from './navbar/navbar.component';
import { GoogleLoginComponent } from './google-login/google-login.component';
import { MainLoginComponent } from './main-login/main-login.component';

@NgModule({
  declarations: [
    AppComponent,
    CourseComponent,
    HomepageComponent,
    BackButtonDirective,
    RatingComponent,
    NavbarComponent,
    GoogleLoginComponent,
    MainLoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgxStarRatingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpInterceptorService,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
