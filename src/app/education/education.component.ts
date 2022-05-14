import { Component, OnInit } from '@angular/core';
import { AppserviceService } from '../appservice.service';

const ed = [
  {
    name: 'Angular - The Complete Guide (2022 Edition)',
    subtype: 'Udemy Course Certificate',
    year: '2022',
    ref: 'http://ude.my/UC-2c6835ca-8abf-4d47-9e04-9b69e5022241',
  },
  {
    name: 'Java 1 – Introduction to Java',
    subtype: 'JavaGuru Course',
    year: '2017',
    ref: 'https://javaguru.lv/en/',
  },
  {
    name: 'ISTQB® Certified Tester Foundation Level certification',
    subtype: 'Certificate',
    year: '2016',
    ref: 'https://www.istqb.org/',
  },
  {
    name: 'Bachelor’s degree in Computer Science',
    subtype: 'Riga Technical university',
    year: '2012',
    ref: 'https://www.rtu.lv/en',
  },
];

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css'],
})
export class EducationComponent implements OnInit {
  constructor(private appService: AppserviceService) {}

  addClass($event: any) {
    this.appService.onIntersection($event);
  }

  ngOnInit(): void {}

  educations = ed;
}
