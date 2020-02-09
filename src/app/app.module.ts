import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MyLib2Module } from '@mytestpackage/my-lib2';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    MyLib2Module
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
