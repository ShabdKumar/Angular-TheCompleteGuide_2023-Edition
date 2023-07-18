import { Directive, HostBinding, HostListener, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appMouseOverBetterHighlight]'
})
export class MouseOverBetterHighlightDirective implements OnInit {
  @Input() defaultColor: string;
  @Input('appMouseOverBetterHighlight') highlightColor: string;

  @HostBinding("style.backgroundColor") backgroundColor: string = 'transparent';

  constructor() { }

  ngOnInit() {
    this.backgroundColor = this.defaultColor;
  }

  @HostListener('mouseenter') mouseOver() {
    this.backgroundColor = this.highlightColor;
  }

  @HostListener('mouseleave') mouseLeave() {
    this.backgroundColor = this.defaultColor;
  }

}
