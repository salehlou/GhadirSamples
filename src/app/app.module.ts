import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { MaterialModule } from './material.module';
<<<<<<< HEAD
import { JalaliMomentsPipe } from './_pip/jalali-moment.pipe';
=======
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


>>>>>>> mehdi

@NgModule({
  declarations: [
    AppComponent,
    JalaliMomentsPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    BrowserAnimationsModule,

  ],
  exports: [
    MaterialModule,


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
