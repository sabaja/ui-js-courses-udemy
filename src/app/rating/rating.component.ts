import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.css']
})
export class RatingComponent implements OnInit {

  @Input() public rate! : number;
  @Input() public max! : number;
  

  constructor() { }

  ngOnInit(): void {
  }

}
