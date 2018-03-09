import { Directive, ElementRef, HostListener, Input, HostBinding } from '@angular/core';

@Directive({
  selector: '[my-high-light]'
})
export class MyHighLightDirective {

  @Input()
  highlightColor:string;

  @HostBinding('style.border')
  border:string;

  constructor(private el: ElementRef) {
    // console.log(el);
    // el.nativeElement.style.backgroundColor = '#f30';
  }

  @HostListener('mouseenter') onmouseenter() {
    // this.highlight('#f30');
    this.highlight(this.highlightColor);
  }

  @HostListener('mouseleave')
  onmouseleave() {
    this.highlight(null);
  }

  private highlight(color: string) {
    this.el.nativeElement.style.backgroundColor = color;
  }

  @HostListener('click')
  onclick(){
    if(this.border){
      this.border = '';
    }else{
      this.border = '1px solid #f30';
    }
  }

}
