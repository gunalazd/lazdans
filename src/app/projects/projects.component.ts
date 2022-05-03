import { Component, OnInit } from '@angular/core';
import { AppserviceService } from '../appservice.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css'],
})
export class ProjectsComponent implements OnInit {
  constructor(private appService: AppserviceService) {}

  addClass($event: any) {
    this.appService.onIntersection($event);
  }

  ngOnInit(): void {}
}
