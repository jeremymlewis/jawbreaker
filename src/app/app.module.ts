import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatDialogModule} from "@angular/material/dialog";
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { JawbreakerComponent } from './jawbreaker/jawbreaker.component';

@NgModule({
  declarations: [
    AppComponent,
    JawbreakerComponent,
  ],
  imports: [
    BrowserModule,
    MatDialogModule,
    BrowserAnimationsModule
  ],
  entryComponents: [
    JawbreakerComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
