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

  addClass($event: any) {
    this.appService.onIntersection($event);
  }

  ngOnInit(): void {}

  onImagePreview(img: string) {
    if (img === 'bovada') {
      this.showBovada = true;
      this.showBetslip = false;
    } else if (img === 'betslip') {
      this.showBovada = false;
      this.showBetslip = true;
    } else {
      this.showBovada = false;
      this.showBetslip = false;
    }
  }
}
