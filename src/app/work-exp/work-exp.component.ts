import { Component, Renderer2 } from '@angular/core';
import { AppService } from '../appservice.service';

@Component({
  selector: 'app-work-exp',
  templateUrl: './work-exp.component.html',
  styleUrls: ['./work-exp.component.css'],
})
export class WorkExpComponent {
  constructor(private appService: AppService) {}

  experiences = require("./work-exp.json")

  addClass($event: any) {
    this.appService.onIntersection($event);
  }

  status: boolean = false;
}
