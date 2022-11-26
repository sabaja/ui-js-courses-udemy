import { Component, OnInit } from '@angular/core';
import { GoogleSignService } from '../service/google-sign.service';

/*https://www.youtube.com/watch?v=G5HPBdZgcx8*/ 
@Component({
  selector: 'app-google-login',
  templateUrl: './google-login.component.html',
  styleUrls: ['./google-login.component.css']
})
export class GoogleLoginComponent implements OnInit {

  user: gapi.auth2.GoogleUser | undefined;

  constructor(private signInService : GoogleSignService) { }

  ngOnInit(): void {
    this.signInService.observable().subscribe( user => {
      this.user = user;
    }); 
  }

  onSignIn(googleUser: any) {
    var profile = googleUser.getBasicProfile();
    console.log('ID: ' + profile.getId()); // Do not send to your backend! Use an ID token instead.
    console.log('Name: ' + profile.getName());
    console.log('Image URL: ' + profile.getImageUrl());
    console.log('Email: ' + profile.getEmail()); // This is null if the 'email' scope is not present.
  }

  signOut() {
    // var auth2 = gapi.auth2.getAuthInstance();
    // auth2.signOut().then(function () {
    //   console.log('User signed out.');
    // });
  }
}
