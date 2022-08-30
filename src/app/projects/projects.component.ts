import { Component, OnInit } from '@angular/core';
import { AppserviceService } from '../appservice.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css'],
})
export class ProjectsComponent implements OnInit {
  constructor(private appService: AppserviceService) {}

  showBovada: boolean = false;
  showBetslip: boolean = false;
  showWeather: boolean = false;

  addClass($event: any) {
    this.appService.onIntersection($event);
  }

  ngOnInit(): void {}

  onImagePreview(img: string) {
    if (img === 'bovada') {
      this.showBovada = true;
      this.showBetslip = false;
      this.showWeather = false;
    }
    if (img === 'betslip') {
      this.showBovada = false;
      this.showBetslip = true;
      this.showWeather = false;
    }
    if (img === 'weather') {
      this.showBovada = false;
      this.showBetslip = false;
      this.showWeather = true;
    } else if (img === 'close') {
      this.showBovada = false;
      this.showBetslip = false;
      this.showWeather = false;
    }
  }
}
