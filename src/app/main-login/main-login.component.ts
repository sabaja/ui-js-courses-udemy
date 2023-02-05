import { HttpClient } from '@angular/common/http';
import { Component, OnInit, EventEmitter, Output, Input, ViewChild, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { Credentials } from '../model/credentials';
import { AuthService } from '../service/auth.service';
import { SharedDataService } from '../service/shared-data.service';
import { Request } from '../model/request';

@Component({
  selector: 'app-main-login',
  templateUrl: './main-login.component.html',
  styleUrls: ['./main-login.component.css']
})
export class MainLoginComponent implements OnInit {

  @Output() isSignedInChange = new EventEmitter<boolean>();
  private _isSignedIn: boolean = false;

  signedinUser: string = '';

  @ViewChild('usr') email: ElementRef<HTMLInputElement> = {} as ElementRef;
  @ViewChild('pwd') pwd: ElementRef<HTMLInputElement> = {} as ElementRef;

  username: string = "";
  password: string = "";
  
	error: string = '';

  constructor(private authService: AuthService, private http: HttpClient, private router: Router, private credentials: Credentials, private sharedService: SharedDataService) {
    // this.authService.authenticate(undefined, undefined);

    this.isSignedIn = this.authService.isUserSignedin();
    this.signedinUser = this.authService.getSignedinUser();
    // this.isSignedIn = true;
    // this.signedinUser = 'Gaia153';

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
  const username = this.email.nativeElement.value;
  const password = this.pwd.nativeElement.value;
		if(username !== '' && username !== null && password !== '' && password !== null) {
			const request: Request = { userName: username, userPwd: password};

			this.authService.signin(request).subscribe({
				//this.router.navigate(['/home']);
				next : result => this.router.navigateByUrl(''),
				error : () => 'Either invalid credentials or something went wrong'
			});
		} else {
			this.error = 'Invalid Credentials';
		}
	}

  doSignout() {
    this.authService.signout();
  }

}
