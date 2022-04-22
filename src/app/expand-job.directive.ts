import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appExpandJob]',
})
export class ExpandJobDirective {
  @Input('appExpandJob') expandClass: any;

  constructor(public elementRef: ElementRef) {}

  expanded = false;

  @HostListener('click') onMouseClick() {
    if (this.expanded) {
      this.elementRef.nativeElement.classList.add(this.expandClass);
    } else {
      this.elementRef.nativeElement.classList.remove(this.expandClass);
    }
  }
}
