import { NgModule } from '@angular/core';
import { ComponentModule } from './component.module';
import { DirectiveModule } from './directive.module';
import { NameService } from './name.service';

@NgModule({
  imports: [ComponentModule, DirectiveModule],
  exports: [DirectiveModule],
  providers: [NameService.provide('from BundleOneModule')],
})
export class BundleOneModule {
  public constructor(nameService: NameService) {
    console.log('BundleOneModule ctor NameService:', nameService.name);
  }
}
