import { Component, OnInit } from '@angular/core';
import { CourseService } from '../service/course.service';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {

  title: String;
  courses: String[];

  constructor(service: CourseService) {
    this.title = "App for microservices "
    this.courses = service.getCourses();
  }

  ngOnInit(): void {

  }

  getTitle() {
    return this.title;
  }
}
