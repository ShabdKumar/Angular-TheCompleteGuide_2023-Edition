import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appMouseOverHighlight]'
})
export class MouseOverHighlightDirective {

  constructor(private eleRef: ElementRef, private renderer: Renderer2) { }

  @HostListener('mouseover') mouseOver() {
    this.renderer.setStyle(this.eleRef.nativeElement, 'backgroundColor', 'coral');
  }

  @HostListener('mouseleave') mouseLeave() {
    this.renderer.setStyle(this.eleRef.nativeElement, 'backgroundColor', 'transparent');
  }

}
