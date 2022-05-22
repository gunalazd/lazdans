import { Component, OnInit } from '@angular/core';
import { AppserviceService } from '../appservice.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
})
export class ContactComponent implements OnInit {
  constructor(private appService: AppserviceService) {}

  ngOnInit(): void {}

  addClass($event: any) {
    this.appService.onIntersection($event);
  }
}
