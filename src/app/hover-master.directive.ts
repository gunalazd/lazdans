import { Directive, HostListener, ElementRef, Input } from '@angular/core';
import { timeout } from 'rxjs-compat/operator/timeout';

@Directive({
  selector: '[hover-class]',
})
export class HoverMasterDirective {
  constructor(public elementRef: ElementRef) {}
  @Input('hover-class') hoverClass: any;

  @HostListener('mouseenter') onMouseEnter() {
    this.elementRef.nativeElement.classList.add(this.hoverClass);
  }

  @HostListener('mouseleave') onMouseLeave() {
    setTimeout(() => {
      this.elementRef.nativeElement.classList.remove(this.hoverClass);
    }, 800);
  }
}
