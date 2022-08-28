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
  
  setTitle(title: string) {
      this.titleSource.next(title)
  }
}
