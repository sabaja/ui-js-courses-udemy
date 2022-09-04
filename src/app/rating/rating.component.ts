import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { SharedDataService } from '../service/shared-data.service';

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.css'],
})
export class RatingComponent implements OnDestroy  {

   stars: number[] = [1, 2, 3, 4, 5];
   @Input() selectedStarValue: number = 0;
   subscription: Subscription;

  constructor(private sharedDataService :  SharedDataService) { 
    this.subscription = this.sharedDataService.currentStarValue.subscribe( starValue => this.selectedStarValue = starValue);
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  countStar(star: number) {
    this.selectedStarValue = star;
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