import {
  Component,
  ElementRef,
  Inject,
  OnInit,
  ViewChild,
} from '@angular/core';
import { DOCUMENT, ViewportScroller } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  constructor(private viewportScroller: ViewportScroller) {}

  @ViewChild('myDiv') navbar: ElementRef | undefined;

  public onClick(elementId: string): void {
    this.viewportScroller.scrollToAnchor(elementId);
  }

  ngOnInit(): void {
    var prevScrollpos = window.pageYOffset;
    const element = document.getElementById('nav-container');
    const elementToTop = document.getElementById('to-top');
    window.onscroll = function () {
      var currentScrollPos = window.pageYOffset;
      if (element) {
        if (currentScrollPos > 100) {
          element.style.boxShadow = '2px 5px 20px #000000';
          elementToTop?.classList.add('show-scrollTop');
        } else {
          element.style.boxShadow = '';
          elementToTop?.classList.remove('show-scrollTop');
        }
      }
      if (prevScrollpos > currentScrollPos) {
        if (element) {
          element.style.top = '0';
          // element.style.boxShadow = '2px 5px 20px #000000';
        }
      } else {
        if (element) {
          element.style.top = '-70px';
          element.style.boxShadow = '';
        }
      }
      prevScrollpos = currentScrollPos;
    };
  }

  toTop() {
    this.viewportScroller.scrollToPosition([0, 0]);
  }

  title = 'lazdans';
}
