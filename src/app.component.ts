import 'zone.js/dist/zone';
import { Component } from '@angular/core';
import { NameService } from './name.service';

@Component({
  selector: 'my-app',
  template: `
    <h1>Hello from {{name}}!</h1>
    <p>
      This example is demonstrating two fundamental and rather different aspects of the Angular module import/export mechanism.
    </p>
    <ul>
      <li>For components and directives, the import/export works</li>
    </ul>
    <p>
      This demo requires you to "fiddle" with the code to see how different configurations affect the result
    </p>
    <demo directive></demo>
  `,
  providers: [NameService.provide('from App')],
})
export class App {
  name = 'Angular';

  public constructor(nameService: NameService) {
    console.log('App ctor NameService:', nameService.name);
  }
}
