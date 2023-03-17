import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.css'],
})
export class IntroComponent implements OnInit {
  constructor() {}
  element = document.getElementsByClassName('spinner');

  ngOnInit(): void {
    console.log("TEST :::: 1");
    this.showAnimationObj();
  }

  showAnimationObj() {
    console.log("TEST :::: 2");
    for (var i = 0; i < this.element.length; i++) {
      this.doSetTimeout(i);
    }
  }

  doSetTimeout(i: number) {
    console.log("TEST :::: 3")
    setTimeout(() => {
      this.element[i].classList.add('show-me');
    }, i * 750);
  }
}
