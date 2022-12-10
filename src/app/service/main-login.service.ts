import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Urls } from '../model/Urls';

@Injectable({
  providedIn: 'root'
})
export class MainLoginService {

  private _authenticated: boolean = false;
  private userUrl: string;

  constructor(private http: HttpClient, private urls: Urls) {
    this.userUrl = this.urls.userUrl;
  }

  public authenticate(credentials: any, callback: any) {

    const headers = new HttpHeaders(credentials ? {
      authorization: 'Basic ' + Buffer.from(credentials.username + ':' + credentials.password).toString('base64')
      // + btoa(credentials.username + ':' + credentials.password)
    } : {});

    this.http.get(this.userUrl, { headers: headers }).subscribe(response => {
      if (response) {
        this._authenticated = true;
      } else {
        this._authenticated = false;
      }
      return callback && callback();
    });

  }

  public get authenticated() {
    return this._authenticated;
  }

  public set authenticated(authenticate: boolean) {
    this._authenticated = authenticate;
  }
}
