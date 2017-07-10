import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { ListComponent } from './list/list.component';
import { AbbyComponent } from './ab/ab.component';
import { DavidComponent } from './advert/advert.component';

@NgModule({
  declarations: [
    AppComponent,
    AbbyComponent,
    ListComponent,
    DavidComponent
  ],
  imports: [
    BrowserModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
