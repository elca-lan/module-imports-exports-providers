import { Directive, ElementRef, OnInit, Renderer2 } from '@angular/core';
import { NameService } from './name.service';

@Directive({
  selector: '[directive]',
})
export class DemoDirective implements OnInit {
  public constructor(
    private readonly renderer: Renderer2,
    private readonly element: ElementRef,
    nameService: NameService
  ) {
    console.log('DemoDirective ctor NameService:', nameService.name);
  }

  public ngOnInit(): void {
    this.renderer.setStyle(this.element.nativeElement, 'color', 'red');
  }
}
