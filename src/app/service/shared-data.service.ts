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
  currentStarValue = this.selectedStarValue.asObservable();

  setTitle(title: string) {
    this.titleSource.next(title)
  }

  setStarValue(starRating: number) {
    let star = starRating != null ? 0 : starRating;
    this.selectedStarValue.next(star);
  }
}
