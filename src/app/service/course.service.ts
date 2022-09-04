import { Injectable } from '@angular/core'
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Course } from '../model/course';
import { from, Observable } from 'rxjs';
;

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  private allCourserUrl: string;
  private mock: boolean = false;

  constructor(private http: HttpClient) {
    this.allCourserUrl = 'http://localhost:8080/courses/list'
  }

  public findAll(): Observable<Course[]> {
    if (this.mock === true) {
      return this.getMockedCourses();  
    }
    return this.http.get<Course[]>(this.allCourserUrl);
  }

  private getMockedCourses(): Observable<Course[]> {
    const allCourses_mock = JSON.parse(`[
      {
        "courseId" : 1,
        "name" : "Java",
       "courseDescription" : "aaaaaa",
        "ratingValue" : 4.70
      },
      {
        "courseId" : 2,
        "name" : "C++",
       "courseDescription" : "ffffff",
        "ratingValue" : 4.00
      },
      {
        "courseId" : 3,
        "name" : "Python",
       "courseDescription" : "asdaq",
        "ratingValue" : 3.00
      }
    ]`);
    return new Observable((subscriber) => {
      setTimeout(() => {
        subscriber.next(allCourses_mock);
        subscriber.complete();
      }, 500);
    });
  }
}
