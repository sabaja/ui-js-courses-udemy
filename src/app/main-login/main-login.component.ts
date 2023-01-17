import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Credentials } from '../model/credentials';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-main-login',
  templateUrl: './main-login.component.html',
  styleUrls: ['./main-login.component.css']
})
export class MainLoginComponent implements OnInit {

  greeting = {};

  constructor(private authService: AuthService, private http: HttpClient, private router: Router, private credentials: Credentials) {
    this.authService.authenticate(undefined, undefined);
    
  }

  ngOnInit(): void {
  }

  logout() {
    this.http.post('logout', {}).subscribe(() => {
      this.authService.authenticated = false;
      this.router.navigateByUrl('login')
    });
  }

  authenticated() { return this.authService.authenticated; }

  login() {
    this.authService.authenticate(this.credentials, () => {
        this.router.navigateByUrl('login');
    });
    return false;
  }

}
