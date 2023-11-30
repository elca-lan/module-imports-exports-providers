import { NgModule } from '@angular/core';
import { ComponentModule } from './component.module';
import { DirectiveModule } from './directive.module';
import { NameService } from './name.service';

@NgModule({
  imports: [ComponentModule, DirectiveModule],
  exports: [ComponentModule],
  providers: [NameService.provide('from BundleTwoModule')],
})
export class BundleTwoModule {
  public constructor(nameService: NameService) {
    console.log('BundleTwoModule ctor NameService:', nameService.name);
  }
}
