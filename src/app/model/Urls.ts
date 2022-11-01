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
