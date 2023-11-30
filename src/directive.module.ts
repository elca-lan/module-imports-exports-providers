import { NgModule } from '@angular/core';
import { DemoDirective } from './demo.directive';
import { NameService } from './name.service';

@NgModule({
  declarations: [DemoDirective],
  exports: [DemoDirective],
  providers: [],
})
export class DirectiveModule {
  public constructor(nameService: NameService) {
    console.log('DirectiveModule ctor NameService:', nameService.name);
  }
}
