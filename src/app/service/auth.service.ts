import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  authenticated = false;

  constructor(private http: HttpClient) { 
    this.http = http;
  }

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
}
