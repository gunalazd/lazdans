import { Component } from '@angular/core';

const EXP = [
  {
    name: 'Software Engineer',
    place: 'The Workshop - Inventors of Play',
    industry: 'Online Gambling',
    date: '[Sep 2020 – Nov 2021]',
    time: 'Spain (Malaga)',
    children: [
      { name: 'Front-End development with Angular and Typescript' },
      { name: 'Delivering changes to production using Bamboo CI/CD pipelines' },
      { name: 'Small Back-End related tasks in Java with REST API Endpoints' },
      { name: 'Participation in code review process' },
    ],
  },
  {
    name: 'QA Engineer',
    place: 'The Workshop - Inventors of Play',
    industry: 'Online Gambling',
    date: '[Jun 2018 – Sep 2020]',
    time: 'Spain (Malaga)',
    children: [
      { name: 'Test Automation using Selenium Web driver and Cypress.io' },
      { name: 'Test planning for new features' },
    ],
  },
  {
    name: 'Software Test Specialist',
    place: 'TELE2 SHARED SERVICE CENTRE',
    industry: 'Telecommunication',
    date: '[Oct 2015 – Jan 2018]',
    time: 'Latvia (Riga)',
    children: [
      {
        name: 'Use agile methodology on a daily basis within a team located in different geographic locations (Netherlands, Latvia and India).',
      },
      {
        name: 'Analyse requirements and develop Test Cases for new user stories.',
      },
      {
        name: 'Work closely with developers and business analysts to achieve maximal test coverage of new functionality, by performing internal test case review sessions.',
      },
      {
        name: 'Development of automation scripts in internal keyword based automation framework (developed on Java with Selenium Web driver), to automate regression test scenarios.',
      },
      {
        name: 'Perform performance and load tests on the billing system after each large release, record and report results to the Delivery Manager and Test group.',
      },
    ],
  },
  {
    name: 'Software Test specialist',
    place: 'SOAAR',
    industry: 'Software development',
    date: '[Sep 2013 – Oct 2015]',
    time: 'Latvia (Riga)',
    children: [
      { name: 'Software testing' },
      { name: 'Solution/Services testing' },
      { name: 'User scenario management' },
      { name: 'Web Application test automation' },
      { name: 'Selenium Web driver tests development in Java' },
    ],
  },
  {
    name: 'IT Specialist',
    place: 'Riga Business School',
    industry: 'Education',
    date: '[Jan 2012 – Aug 2013]',
    time: 'Latvia (Riga)',
    children: [
      { name: 'IT equipment repair ' },
      { name: 'IT / office equipment maintenance ' },
      { name: 'IT equipment assembling and setup ' },
      { name: 'Lecture capture application administration ' },
      { name: 'Computer laboratory administration ' },
      { name: 'IT support for corporate events ' },
    ],
  },
];

@Component({
  selector: 'app-work-exp',
  templateUrl: './work-exp.component.html',
  styleUrls: ['./work-exp.component.css'],
})
export class WorkExpComponent {
  constructor() {}

  experiances = EXP;
  status: boolean = false;
}
