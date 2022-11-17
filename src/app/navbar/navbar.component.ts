import { Component, OnInit } from '@angular/core';
import { SharedDataService } from '../service/shared-data.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  title? : string;

  constructor(private sharedDataService : SharedDataService) { 
    this.title = this.sharedDataService.getTitle();
  }

  ngOnInit(): void {
  }

}
