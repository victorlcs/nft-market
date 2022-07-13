import { ComponentRef, Directive, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[dynaTemplate]',
})
export class DynamicTemplatingDirective {
  constructor(
    public viewContainerRef: ViewContainerRef,
    public templateRef: TemplateRef<any>
  ) {}
}
