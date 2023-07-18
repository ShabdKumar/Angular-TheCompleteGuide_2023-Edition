import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appUnless]'
})
export class UnlessDirective {

  constructor(private temRef: TemplateRef<any>, private vcRef: ViewContainerRef) { }

  @Input() set appUnless(condition: boolean) {
    console.log(condition);
    if (!condition) {
      this.vcRef.createEmbeddedView(this.temRef);
    } else {
      this.vcRef.clear();
    }
  }
}
