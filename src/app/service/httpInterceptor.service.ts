import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { AuthService } from './auth.service';
 
//https://dev-academy.com/how-to-use-angular-interceptors-to-manage-http-requests/#what-is-an-angular-interceptor-after-all
@Injectable()
export class HttpInterceptorService implements HttpInterceptor {
 
    constructor(private authService: AuthService) { }
 
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const token = this.authService.getToken();
      
        if (this.authService.isUserSignedin() && token) {
            const request = req.clone({
                headers: new HttpHeaders({
                    'Authorization': `Bear  + ${token}`
                })
            });
            return next.handle(request).pipe(
				catchError(err => {
					if(err instanceof HttpErrorResponse && err.status === 401) {
						this.authService.signout();
					}
					return throwError(err);
				})
			);
    }
       
		return next.handle(req);
}
