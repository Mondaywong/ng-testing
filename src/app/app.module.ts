import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { RedComponent } from './red/red.component';
import { GreenComponent } from './green/green.component'
import { YellowComponent } from './yellow/yellow.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule],
  declarations: [ AppComponent, HelloComponent, RedComponent, GreenComponent, YellowComponent],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
