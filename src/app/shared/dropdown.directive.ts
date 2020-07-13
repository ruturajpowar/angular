import { Directive, HostListener, HostBinding, ElementRef } from '@angular/core';

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective {
  @HostBinding('class.open') open = false;

  @HostListener('document:click', ['$event']) toggleOpen(event: Event) {
    this.open = this.elRef.nativeElement.contains(event.target) ? !this.open : false;
  }
  constructor(private elRef: ElementRef) { }


}
