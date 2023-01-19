import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedDataService {

  constructor() { }

  public title: string = 'DEFUALT';
  private titleSource = new BehaviorSubject(this.title);
  currentTitle = this.titleSource.asObservable();

  private selectedStarValue = new BehaviorSubject(0);
  currentStarValue = this.selectedStarValue.asObservable()
  
  private selectedCourseId = new BehaviorSubject(0);
  currentStarId = this.selectedCourseId.asObservable();

  private isSignedIn = new BehaviorSubject(false);

  setTitle(title: string) {
    this.titleSource.next(title)
  }

  getTitle() {
    return this.titleSource.getValue();
  }

  setStarValue(starRating: number) {
    let star = starRating != null ? 0 : starRating;
    this.selectedStarValue.next(star);
  }

  setStarId(courseId: number) {
    let id = courseId != null ? 0 : courseId;
    this.selectedCourseId.next(id);
  }

  getIsSignedIn() {
    return this.isSignedIn.getValue();
  }

  setIsSignedIn(value: boolean) {
    this.isSignedIn.next(value);
  }
}
