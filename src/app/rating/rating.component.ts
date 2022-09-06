import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { catchError, Subscription, take, tap } from 'rxjs';
import { Course } from '../model/course';
import { CourseService } from '../service/course.service';
import { SharedDataService } from '../service/shared-data.service';
import { ErrorsService } from '../service/errors.service';
import { LogService } from '../service/log.service';

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.css'],
})
export class RatingComponent implements OnDestroy  {

   stars: number[] = [1, 2, 3, 4, 5];
   @Input() selectedStarValue: number = 0;
   @Input() selectedCourseId: number = 0;
   private subscriptions = new Subscription();

  constructor(private sharedDataService :  SharedDataService, private courseService: CourseService, private errors: ErrorsService, private logService: LogService) { 
    this.subscriptions.add( this.sharedDataService.currentStarValue.subscribe( starValue => this.selectedStarValue = starValue));
    this.subscriptions.add( this.sharedDataService.currentStarId.subscribe( starId => this.selectedCourseId = starId));
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }

  countStar(star: number) {
    this.selectedStarValue = star;
    let id = this.selectedCourseId;
    if (!this.selectedStarValue || !id) { return; }
    
    let course = new Course();
    course.courseId = id;
    course.ratingValue = this.selectedStarValue;

    this.courseService.modifyRating(course).pipe(
      take(1)
   ).subscribe( (c: Course) => {
    tap(_ => this.logService.log(`updated course with id=${c.courseId}`)),
    catchError(this.errors.handleError<any>('updateCourse'))
   });
  }

  addClass(star: number) {
    console.log("star", star);
    console.log("selectedStarValue", this.selectedStarValue);
    let ab = "";
    for (let i = 0; i < star; i++) {
      console.log("star i", star);
      ab = "starId" + i;
      const abElement = document.getElementById(ab);
      if (abElement != null) {
        abElement.classList.add("selected");
      }
    }
  }

  removeClass(star: number) {
    console.log("removestar", star);
    let ab = "";
    for (let i = star - 1; i >= this.selectedStarValue; i--) {
      console.log("star i", star);
      ab = "starId" + i;
      const abElement = document.getElementById(ab);
      if (abElement != null) {
        abElement.classList.add("selected");
      }
    }
  }
}