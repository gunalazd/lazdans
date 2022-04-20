import { Component } from '@angular/core';
import { FlatTreeControl } from '@angular/cdk/tree';
import {
  MatTreeFlatDataSource,
  MatTreeFlattener,
} from '@angular/material/tree';

interface FoodNode {
  name: string;
  children?: FoodNode[];
}

const TREE_DATA: FoodNode[] = [
  {
    name: 'Software Engineer',
    children: [
      { name: 'Front-End development with Angular and Typescript' },
      { name: 'Delivering changes to production using Bamboo CI/CD pipelines' },
      { name: 'Small Back-End related tasks in Java with REST API Endpoints' },
      { name: 'Participation in code review process' },
    ],
  },
  {
    name: 'QA Engineer',
    children: [
      { name: 'Test Automation using Selenium Web driver and Cypress.io' },
      { name: 'Test planning for new features' },
    ],
  },
  {
    name: 'Software Test Specialist',
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

interface ExampleFlatNode {
  expandable: boolean;
  name: string;
  level: number;
}

@Component({
  selector: 'app-work-exp',
  templateUrl: './work-exp.component.html',
  styleUrls: ['./work-exp.component.css'],
})
export class WorkExpComponent {
  private _transformer = (node: FoodNode, level: number) => {
    return {
      expandable: !!node.children && node.children.length > 0,
      name: node.name,
      level: level,
    };
  };

  treeControl = new FlatTreeControl<ExampleFlatNode>(
    (node) => node.level,
    (node) => node.expandable
  );

  treeFlattener = new MatTreeFlattener(
    this._transformer,
    (node) => node.level,
    (node) => node.expandable,
    (node) => node.children
  );

  dataSource = new MatTreeFlatDataSource(this.treeControl, this.treeFlattener);

  constructor() {
    this.dataSource.data = TREE_DATA;
  }

  hasChild = (_: number, node: ExampleFlatNode) => node.expandable;
}
