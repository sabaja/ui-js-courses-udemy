import { ThisReceiver } from '@angular/compiler';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class Urls {
    private _getCoursesUrl: string = "http://localhost:8000/api/courses/list";
    private _coursesMockedUrl: string = 'assets/courses.json';
    private _mock: boolean = false;
    private _putRatingUrl: string = "http://localhost:8000/api/courses/course/rating/";
    private _putEventRatingUrl: string = "http://localhost:8000/api/courses/course/rating-event/";
    private _login: string = "http://localhost:8000/api/courses/login";
    private _userUrl: string = "http://localhost:8000/api/courses/login/user";

    get coursesUrl() {
        return this._getCoursesUrl;
    }

    get coursesMockedUrl() {
        return this._coursesMockedUrl;
    }

    get mock() {
        return this._mock;
    }

    get putRatingUrl() {
        return this._putRatingUrl;
    }

    get putEventRatingUrl() {
        return this._putEventRatingUrl;
    }

    get loginUrl() {
        return this._login;
    }

    get userUrl() {
        return this._userUrl;
    }
}
