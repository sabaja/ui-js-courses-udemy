import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Urls {
    private readonly API = "http://localhost:8000/api/"

    private _getCoursesUrl: string = this.API + "courses/list";
    private _coursesMockedUrl: string = 'assets/courses.json';
    private _mock: boolean = false;
    private _putRatingUrl: string = this.API + "courses/course/rating/";
    private _putEventRatingUrl: string = this.API + "courses/course/rating-event/";
    private _user: string = this.API + "/auth/user";

    get getCoursesUrl() {
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
}
