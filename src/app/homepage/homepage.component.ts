import { Component, OnInit } from '@angular/core';
import { SharedDataService } from '../service/shared-data.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  title : string = '';

  constructor(private sharedDataService : SharedDataService) { }

  ngOnInit(): void {
    this.sharedDataService.currentTitle.subscribe(title => (this.title = title)); //<= Always get current value!
  }

}
