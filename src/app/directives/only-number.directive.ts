import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: 'input[numbersOnly]'
})
export class OnlyNumberDirective {

  constructor(private el: ElementRef) { }

  @Input() OnlyNumber: boolean=true;

  @HostListener('keydown', ['$event']) onKeyDown(event:any) {
    let e = <KeyboardEvent> event;
    if (['Delete', 'Backspace', 'Tab', 'Escape', 'Enter', 'NumLock', 'ArrowLeft', 'ArrowRight', 'End', 'Home', '.'].indexOf(e.key) !== -1 ||
      // Allow: Ctrl+A
      (e.key === 'a' && (e.ctrlKey || e.metaKey)) ||
      // Allow: Ctrl+C
      (e.key === 'c' && (e.ctrlKey || e.metaKey)) ||
      // Allow: Ctrl+V
      (e.key === 'v' && (e.ctrlKey || e.metaKey)) ||
      // Allow: Ctrl+R
      (e.key === 'r' && (e.ctrlKey || e.metaKey)) ||
      // Allow: Ctrl+X
      (e.key === 'x' && (e.ctrlKey || e.metaKey))) {
      // let it happen, don't do anything
      return;
    }
    // Ensure that it is a number and stop the keypress
    if ((e.shiftKey || ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'].indexOf(e.key) === -1)) {
      e.preventDefault();
    }
  }
  @HostListener('paste', ['$event']) onPaste(event:any) {
    // Don't allow pasted text that contains non-numerics
    const pastedText = (event.originalEvent || event).clipboardData.getData('text/plain');

    if (pastedText) {
      const regEx = new RegExp('^[0-9]*$');
      if (!regEx.test(pastedText)) {
        event.preventDefault();
      }
    }
  }
}
