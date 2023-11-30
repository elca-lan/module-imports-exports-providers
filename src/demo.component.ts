import { Component } from '@angular/core';
import { NameService } from './name.service';

@Component({
  selector: 'demo',
  template: `
    <h2>DEMO</h2>
    <p>{{ nameService.name }}</p>
  `,
})
export class DemoComponent {
  public constructor(public readonly nameService: NameService) {
    console.log('DemoDirective ctor NameService:', nameService.name);
  }
}
