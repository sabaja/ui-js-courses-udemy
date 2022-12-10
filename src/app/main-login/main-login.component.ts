import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Credentials } from '../model/credentials';
import { Urls } from '../model/Urls';
import { MainLoginService } from '../service/main-login.service';

@Component({
  selector: 'app-main-login',
  templateUrl: './main-login.component.html',
  styleUrls: ['./main-login.component.css']
})
export class MainLoginComponent implements OnInit {

  greeting = {};

  private credentials_: Credentials;
  private loginUrl: string;

  constructor(private loginService: MainLoginService, private http: HttpClient, private router: Router, credentials: Credentials, private urls: Urls) {
    this.loginService.authenticate(undefined, undefined);
    this.credentials_ = credentials;
    this.loginUrl = urls.loginUrl;
  }

  ngOnInit(): void {
  }

  logout() {
    this.http.post('logout', {}).subscribe(() => {
      this.loginService.authenticated = false;
      this.router.navigateByUrl(this.loginUrl)
    });
  }

  authenticated() { return this.loginService.authenticated; }

  login() {
    this.loginService.authenticate(this.credentials_, () => {
      this.router.navigateByUrl(this.loginUrl);
    });
    return false;
  }

  public get credentials() {
    return this.credentials_;
  }

  public set credentials(credetials: Credentials) {
    this.credentials_ = credetials;
  }
}
