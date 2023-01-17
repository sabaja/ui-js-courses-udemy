import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Request } from '../model/request';
import { ActivatedRoute, Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  authenticated = false;
  private baseUrl = 'http://localhost:8088/auth';

  constructor(private route: ActivatedRoute, private router: Router, private http: HttpClient) { }

  public authenticate(credentials: any, callback: any) {

    const headers = new HttpHeaders(credentials ? {
      authorization: 'Basic ' + Buffer.from(credentials.username + ':' + credentials.password).toString('base64')
      // + btoa(credentials.username + ':' + credentials.password)
    } : {});

    this.http.get('user', { headers: headers }).subscribe(response => {
      if (response) {
        this.authenticated = true;
      } else {
        this.authenticated = false;
      }
      return callback && callback();
    });
  }
  
    signin(request: Request): Observable<any> {
		return this.http.post<any>(this.baseUrl + 'signin', request, {headers: new HttpHeaders({ 'Content-Type': 'application/json' })}).pipe(map((resp) => {
			sessionStorage.setItem('user', request.userName);
			sessionStorage.setItem('token', 'HTTP_TOKEN ' + resp.token);
			return resp;
		}));
	}

	signup(request: Request): Observable<any> {
		return this.http.post<any>(this.baseUrl + 'signup', request, {headers: new HttpHeaders({ 'Content-Type': 'application/json' }), responseType: 'text' as 'json'}).pipe(map((resp) => {                                                         
			return resp;
		}));
	}

	signout() {
		sessionStorage.removeItem('user');
		sessionStorage.removeItem('token');

		this.router.navigateByUrl('signin');
	}

	isUserSignedin() {
		return sessionStorage.getItem('token') !== null;
	}

	getSignedinUser() {
		return sessionStorage.getItem('user') as string;
	}

	getToken() {
		let token = sessionStorage.getItem('token') as string;
		return token;
	}
}
