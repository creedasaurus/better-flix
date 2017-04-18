import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// Angular Material stuff vvv
import {
  MdCardModule,
  MdButtonModule,
  MdToolbarModule,
  MdIconModule,
  MdInputModule,
  MdSelectModule } from '@angular/material';


import { AppComponent } from './app.component';
import { MainMenuBarComponent } from './menu/menu.component';
import { MovieCardComponent } from './card/card.component';
import { MovieListComponent } from './list/list.component';

@NgModule({
  imports: [
    BrowserAnimationsModule,
    MdIconModule,
    MdCardModule,
    MdButtonModule,
    MdToolbarModule,
    MdInputModule,
    MdSelectModule,
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  declarations: [
    AppComponent,
    MainMenuBarComponent,
    MovieCardComponent,
    MovieListComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
