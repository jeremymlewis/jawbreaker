import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { JawbreakerComponent } from './jawbreaker/jawbreaker.component';

@NgModule({
  declarations: [
    AppComponent,
    JawbreakerComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
