import { Injectable, Renderer2, RendererFactory2 } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class AppService {
  public readonly items: number[] = Array(1000)
    .fill(1)
    .map((item, index) => item + index);

  private renderer: Renderer2;

  constructor(rendererFactory: RendererFactory2) {
    this.renderer = rendererFactory.createRenderer(null, null);
  }

  public onIntersection({
    target,
    visible,
  }: {
    target: Element;
    visible: boolean;
  }): void {
    if (visible) {
      this.renderer.addClass(target, visible ? 'active' : 'inactive');
      this.renderer.removeClass(target, visible ? 'inactive' : '');
    }
  }
}
