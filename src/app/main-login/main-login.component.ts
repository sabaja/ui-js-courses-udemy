import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Credentials } from '../model/credentials';
import { MainLoginService } from '../service/main-login.service';

@Component({
  selector: 'app-main-login',
  templateUrl: './main-login.component.html',
  styleUrls: ['./main-login.component.css']
})
export class MainLoginComponent implements OnInit {

  greeting = {};

  constructor(private loginService: MainLoginService, private http: HttpClient, private router: Router, private credentials: Credentials) {
    this.loginService.authenticate(undefined, undefined);
    
  }

  ngOnInit(): void {
  }

  logout() {
    this.http.post('logout', {}).subscribe(() => {
      this.loginService.authenticated = false;
      this.router.navigateByUrl('login')
    });
  }

  authenticated() { return this.loginService.authenticated; }

  login() {
    this.loginService.authenticate(this.credentials, () => {
        this.router.navigateByUrl('login');
    });
    return false;
  }

}
