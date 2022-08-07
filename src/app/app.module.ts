import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RusRegionMapModule } from 'rus-region-map';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    RusRegionMapModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
