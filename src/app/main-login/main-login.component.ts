import { HttpClient } from '@angular/common/http';
import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Credentials } from '../model/credentials';
import { AuthService } from '../service/auth.service';
import { SharedDataService } from '../service/shared-data.service';

@Component({
  selector: 'app-main-login',
  templateUrl: './main-login.component.html',
  styleUrls: ['./main-login.component.css']
})
export class MainLoginComponent implements OnInit {

  @Output() isSignedInChange = new EventEmitter<boolean>();
  private _isSignedIn: boolean = false;

  signedinUser: string = '';



  constructor(private authService: AuthService, private http: HttpClient, private router: Router, private credentials: Credentials, private sharedService: SharedDataService) {
    // this.authService.authenticate(undefined, undefined);

    // this.isSignedin = this.authService.isUserSignedin();
    // this.signedinUser = this.authService.getSignedinUser();
    this.isSignedIn = false;
    this.signedinUser = 'Gaia153';

  }

  ngOnInit() {
    // this.isSignedin = this.authService.isUserSignedin();
    // this.signedinUser = this.authService.getSignedinUser();
    // this._isSignedIn = true;
    // this.authService.authenticated = this.isSignedIn;
    // this.sharedService.setIsSignedIn(this.isSignedIn);

    // console.log("MainLogin " + this.isSignedIn)

  }

  logout() {
    this.http.post('logout', {}).subscribe(() => {
      this.router.navigateByUrl('login')
    });
  }

  @Input()
  get isSignedIn() {
    return this._isSignedIn;
  }

  set isSignedIn(value: boolean) {
    this._isSignedIn = value;
    this.isSignedInChange.emit(this._isSignedIn);
  }


  authenticated() {
    return this.isSignedIn;
  }

  login() {
    // this.authService.authenticate(this.credentials, () => {
    //     this.router.navigateByUrl('login');
    // });
    return false;
  }

  doSignout() {
    this.authService.signout();
  }

}
