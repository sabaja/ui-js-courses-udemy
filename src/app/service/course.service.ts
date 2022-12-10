import { Injectable } from '@angular/core'
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Course } from '../model/course';
import { catchError, Observable } from 'rxjs';
import { HttpUtilityService } from './http-utility.service';
import { Urls } from '../model/Urls';
import { ErrorsService } from './errors.service';

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  private allCourserUrl: string;
  private mock: boolean ;
  private coursesMockedUrl: string;
  private putRatingUrl: string;
  private putEventRatingUrl: string;


  constructor(private http: HttpClient, private httpUtility: HttpUtilityService, private urls: Urls, private errors: ErrorsService) {
    this.allCourserUrl = urls.coursesUrl;
    this.coursesMockedUrl = urls.coursesMockedUrl;
    this.mock = urls.mock;
    this.putRatingUrl = urls.putRatingUrl;
    this.putEventRatingUrl = urls.putEventRatingUrl;
  }

  public findAllCourses(): Observable<Course[]> {
    if (this.mock === true) {
      return this.mockedCourses();
    }
    return this.http.get<Course[]>(this.allCourserUrl);
  }

  public modifyRating(course: Course): Observable<Course> {
    /* senza evento */
    // return this.http.put<Course>(this.putRatingUrl + course.courseId, course, this.httpUtility.httpOptions)

    /* con evento */
    return this.http.put<Course>(this.putEventRatingUrl + course.courseId, course, this.httpUtility.httpOptions)
      .pipe(
        catchError(this.errors.handleError('updateCourse', course))
      );
  }

  private mockedCourses(): Observable<Course[]> {
    return this.http.get<Course[]>(this.coursesMockedUrl)
  }
}
