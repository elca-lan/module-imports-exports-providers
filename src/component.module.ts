import { NgModule } from '@angular/core';
import { DemoComponent } from './demo.component';
import { NameService } from './name.service';

@NgModule({
  declarations: [DemoComponent],
  exports: [DemoComponent],
  providers: [NameService.provide('from ComponentModule')],
})
export class ComponentModule {
  public constructor(nameService: NameService) {
    console.log('ComponentModule ctor NameService', nameService.name);
  }
}
