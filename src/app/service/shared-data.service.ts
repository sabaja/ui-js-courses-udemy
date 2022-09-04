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

  private rate = new BehaviorSubject(0);
  currentRate = this.rate.asObservable;

  setTitle(title: string) {
    this.titleSource.next(title)
  }

  setRating(starRating: number) {
    this.rate.next(starRating);
  }
}
