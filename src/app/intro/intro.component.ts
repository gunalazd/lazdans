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
    this.showAnimationObj();
  }

  showAnimationObj() {
    for (var i = 0; i < this.element.length; i++) {
      this.doSetTimeout(i);
    }
  }

  doSetTimeout(i: number) {
    setTimeout(() => {
      this.element[i].classList.add('show-me');
    }, i * 750);
  }
}
