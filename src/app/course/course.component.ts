import { Component, OnInit } from '@angular/core';;
import { Course } from '../model/course';
import { CourseService } from '../service/course.service';
import { SharedDataService } from '../service/shared-data.service';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css'],
  providers: [SharedDataService]
})

export class CourseComponent implements OnInit {

  title: String;
  starValued: number = 0;
  starId: number = 0;
  courses: Course[];

  constructor(private courseService: CourseService, private sharedSDataServive: SharedDataService) {
    this.title = "App for microservices ";
    this.courses = [];
    
  }

  ngOnInit(): void {
    this.courseService.findAllCourses().subscribe(data => {
      this.courses = data;
    })
    this.sharedSDataServive.setStarValue(this.starValued);
    this.sharedSDataServive.setStarId(this.starId);
  }

  getTitle() {
    return this.title;
  }

  getStarValued() {
    return this.starValued
  }
}
