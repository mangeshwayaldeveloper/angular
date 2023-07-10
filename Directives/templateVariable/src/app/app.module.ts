import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {JsonPipe, NgForOf, NgIf} from "@angular/common";

@NgModule({
  declarations: [
    AppComponent
  ],
    imports: [
        BrowserModule,
        JsonPipe,
        NgForOf,
        NgIf
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
