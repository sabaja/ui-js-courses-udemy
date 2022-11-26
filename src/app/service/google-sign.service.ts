import { Injectable } from '@angular/core';
import { Observable, ReplaySubject } from 'rxjs';

/* https://www.youtube.com/watch?v=G5HPBdZgcx8 
https://developers.google.com/identity/gsi/web/guides/overview  */
@Injectable({
  providedIn: 'root'
})
export class GoogleSignService {

  private subjetc = new ReplaySubject<gapi.auth2.GoogleUser>(1);
 

  constructor(private auth2: gapi.auth2.GoogleAuth) {
    gapi.load('auth2', () => {
      this.auth2 = gapi.auth2.init({
        client_id: '347187393122-2ghoctlte71o66gl7ligofdkr4fnc38g.apps.googleusercontent.com'
      });
    })
  }

  public singIn() {
    this.auth2.signIn({
      scope: 'https://www.googleapis.com/auth/gmail.readonly'
    }).then(user => {
      this.subjetc.next(user);
    }).catch(() => {
      this.subjetc.closed;
    })
  }

  public signout(){
    this.auth2.signOut()
    .then(() => {
      this.subjetc.unsubscribe();
      this.subjetc.closed;
    })
  }

  public observable() : Observable<gapi.auth2.GoogleUser> {
    return this.subjetc.asObservable();
  }
}
