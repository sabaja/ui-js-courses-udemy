import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Urls {
    private _getCoursesUrl: string = "http://localhost:8080/courses/list";
    private _coursesMockedUrl: string = 'assets/courses.json';
    private _mock: boolean = false;
    private _putCourseUrl: string = "http://localhost:8080/courses/course";

    get getCoursesUrl() {
        return this._getCoursesUrl;
    }

    get coursesMockedUrl() {
        return this._coursesMockedUrl;
    }

    get mock() {
        return this._mock;
    }

    get putCourseUrl() {
        return this._putCourseUrl;
    }
}
