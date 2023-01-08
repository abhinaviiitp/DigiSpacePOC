import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { NgmaterialModule } from './ngmaterial.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    NgmaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
