import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { App } from './app.component';
import { BundleOneModule } from './bundle-one.module';
import { BundleTwoModule } from './bundle-two.module';
import { NameService } from './name.service';

@NgModule({
  imports: [BrowserModule, BundleTwoModule, BundleOneModule],
  declarations: [App],
  bootstrap: [App],
  //  providers: [NameService.provide('from AppModule')],
})
export class AppModule {
  public constructor(nameService: NameService) {
    console.log('AppModule', nameService.name);
  }
}
