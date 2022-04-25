import { Component } from '@angular/core';

const EXP = [
  {
    name: 'Software Engineer',
    place: 'The Workshop - Inventors of Play',
    industry: 'Online Gambling',
    date: '[Sep 2020 – Nov 2021]',
    location: 'Spain',
    ref: 'https://theworkshop.com/',
    children: [
      { name: 'Front-End development with Angular and Typescript' },
      { name: 'Delivering changes to production using Bamboo CI/CD pipelines' },
      { name: 'Small Back-End related tasks in Java with REST API Endpoints' },
      { name: 'Participation in code review process' },
      { name: 'Member of a Scrum team' },
    ],
  },
  {
    name: 'QA Engineer',
    place: 'The Workshop - Inventors of Play',
    industry: 'Online Gambling',
    date: '[Jun 2018 – Sep 2020]',
    location: 'Spain',
    ref: 'https://theworkshop.com/',
    children: [
      { name: 'Test Automation using Selenium Web driver and Cypress.io' },
      { name: 'Test planning for new features' },
      { name: 'Member of a Scrum team' },
    ],
  },
  {
    name: 'Software Test Specialist',
    place: 'Tele2 Shared Service Center',
    industry: 'Telecommunications',
    date: '[Oct 2015 – Jan 2018]',
    location: 'Latvia',
    ref: 'https://www.tele2.lv/',
    children: [
      {
        name: 'Perform Sanity tests on integrated Siebel CRM system',
      },
      {
        name: 'Use agile methodology on a daily basis within a team located in different geographic locations',
      },
      {
        name: 'Analyse requirements and develop Test Cases for new user stories',
      },
      {
        name: 'Work closely with developers and business analysts to achieve maximal test coverage',
      },
      {
        name: 'Development of automation scripts in internal keyword based automation framework',
      },
      {
        name: 'Use SQL on a daily basis to interact with Oracle DBS to prepare or modify test data',
      },
      {
        name: 'Perform performance and load tests on the billing system after each large release',
      },
    ],
  },
  {
    name: 'Software Test specialist',
    place: 'SOAAR',
    industry: 'Comercial Software development',
    date: '[Sep 2013 – Oct 2015]',
    location: 'Latvia',
    ref: 'https://soaar.lv/',
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
    location: 'Latvia',
    ref: 'https://www.rbs.lv/',
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
