import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { MyInputDirective } from './my-input.directive';
import { MyErrorComponent } from './my-error.component';

@NgModule({
  declarations: [
    AppComponent,
    MyInputDirective,
    MyErrorComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }