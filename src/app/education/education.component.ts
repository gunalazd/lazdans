import { Component, OnInit } from '@angular/core';

export interface Education {
  name: string;
  subtype?: string;
  year: string;
}

const ed: Education[] = [
  {
    name: 'Angular - The Complete Guide (2022 Edition)',
    subtype: 'Udemy Course Certificate',
    year: '2022',
  },
  {
    name: 'Java 1 – Introduction to Java',
    subtype: 'Course',
    year: '2017',
  },
  {
    name: 'ISTQB® Certified Tester Foundation Level certification',
    year: '2016',
  },
  {
    name: 'Bachelor’s degree in Computer Science',
    subtype: 'Riga Technical university',
    year: '2012',
  },
];

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css'],
})
export class EducationComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  educations = ed;
}
