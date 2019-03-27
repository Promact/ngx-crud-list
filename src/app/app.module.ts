import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { NgxCrudListModule } from 'ngx-crud-list';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NgxCrudListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
