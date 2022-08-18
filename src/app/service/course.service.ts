import { Injectable } from '@angular/core'
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Course } from '../model/course';
import { Observable } from 'rxjs';
;

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  private allCourserUrl: string;

  constructor(private http: HttpClient) {
    this.allCourserUrl = 'http://localhost:8080/courses/list'
  }

  public findAll(): Observable<Course[]> {
    return this.http.get<Course[]>(this.allCourserUrl);
  }
}
