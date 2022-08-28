import { Component, OnInit } from '@angular/core';;
import { Course } from '../model/course';
import { CourseService } from '../service/course.service';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {

  title: String;
  courses: Course[];

  constructor(private service: CourseService) {
    this.title = "App for microservices ";
    this.courses = [];
  }

  ngOnInit(): void {
    this.service.findAll().subscribe(data => {
      this.courses = data;
    })
  }

  getTitle() {
    return this.title;
  }
}
