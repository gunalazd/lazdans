import { Component, OnInit } from '@angular/core';

const aboutMe = [
  { text: 'Enthusiastic guy with 10 years of experience in IT industry' },
  {
    text: 'For the most part of my IT career, I have worked in specialisation of Quality Assurance, in my latest step I have moved to the development side, focusing in Front End development',
  },
  {
    text: 'Strong logical and analytical thinking to find solutions for various problems that can occur in the software development process and find solutions to guarantee delivered software quality and good user experience',
  },
  {
    text: 'Experience in projects with strict deadlines, constantly changing requirements, variety of software development life cycle lengths, and working with colleagues of different skill levels.',
  },
];

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.css'],
})
export class AboutMeComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  aboutMe = aboutMe;
}
