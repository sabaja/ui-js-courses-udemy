import { Component } from '@angular/core';
import { SharedDataService } from './service/shared-data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = `JS - COURSES`;
  
  constructor(private sharedDataService : SharedDataService) {
    this.sharedDataService.setTitle(this.title);
  }

  
}
