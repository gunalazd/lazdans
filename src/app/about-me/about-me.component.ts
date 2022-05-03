import { Component, OnInit } from '@angular/core';
import { AppserviceService } from '../appservice.service';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.css'],
})
export class AboutMeComponent implements OnInit {
  constructor(private appService: AppserviceService) {}

  addClass($event: any) {
    this.appService.onIntersection($event);
  }

  ngOnInit(): void {}
}
