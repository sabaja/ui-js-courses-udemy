import { Component, Input, OnInit } from '@angular/core';

import { SharedDataService } from '../service/shared-data.service';

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.css']
})
export class RatingComponent implements OnInit {

  @Input() rate! : number ;
  @Input() public max! : number;
  

  constructor(private sharedDataService : SharedDataService) {
    //  sharedDataService.setRating(this.rate);
   }

  ngOnInit(): void {
  }


}
