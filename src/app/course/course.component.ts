import { Component, OnInit } from '@angular/core';;
import { Course } from '../model/course';
import { CourseService } from '../service/course.service';
import { SharedDataService } from '../service/shared-data.service';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {

  title: String;
  courses: Course[];

  constructor(private service: CourseService, private sharedSDataServive: SharedDataService) {
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

  // setRatingStar(rate: number) {
  //   this.sharedSDataServive.setRating(rate);
  // }
}
