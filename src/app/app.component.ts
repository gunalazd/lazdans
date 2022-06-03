import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { DOCUMENT, ViewportScroller } from '@angular/common';
import { AppserviceService } from './appservice.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  constructor(
    private viewportScroller: ViewportScroller,
    private appService: AppserviceService
  ) {}

  addClass($event: any) {
    this.appService.onIntersection($event);
  }

  @ViewChild('myDiv') navbar: ElementRef | undefined;

  scrollToElement($element: HTMLDivElement): void {
    this.closeBurger();
    $element.scrollIntoView({
      behavior: 'smooth',
      block: 'center',
    });
  }

  closeBurger() {
    const burgerButton = document.getElementById(
      'menu__toggle'
    ) as HTMLInputElement;
    if (burgerButton) {
      burgerButton.checked = false;
    }
  }

  ngOnInit(): void {
    var prevScrollpos = window.pageYOffset;
    const element = document.getElementById('nav-container');
    const elementToTop = document.getElementById('to-top');
    window.onscroll = function () {
      var currentScrollPos = window.pageYOffset;
      if (element) {
        if (currentScrollPos > 100) {
          element.style.boxShadow = '0px 10px 13px -7px #000000';
          elementToTop?.classList.add('show-scrollTop');
        } else {
          element.style.boxShadow = '';
          elementToTop?.classList.remove('show-scrollTop');
        }
      }

      if (prevScrollpos > currentScrollPos) {
        if (element) {
          element.style.top = '0';
          element.style.boxShadow = '0px 10px 13px -7px #000000';
        }
      } else {
        if (element) {
          element.style.top = '-70px';
          element.style.boxShadow = '';
        }
      }
      if (currentScrollPos < 40) {
        if (element) {
          element.style.boxShadow = '';
          element.style.backgroundColor = 'transparent';
        }
      } else {
        if (element) {
          element.style.backgroundColor = '#099fc0c9';
        }
      }
      prevScrollpos = currentScrollPos;
    };
  }

  toTop() {
    this.viewportScroller.scrollToPosition([0, 0]);
  }

  title = 'Lazdans';
}
