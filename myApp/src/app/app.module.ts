import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { Layout1Component } from './layout1/layout1.component';
import {FlexLayoutModule} from '@angular/flex-layout';
import { JsComponent } from './js/js.component';

@NgModule({
  declarations: [
    AppComponent,
    Layout1Component,
    JsComponent
  ],
  imports: [
    BrowserModule,
    FlexLayoutModule
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
