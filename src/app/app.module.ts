import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { MainMenuBarComponent } from './menu/menu.component';
import { MovieCardComponent } from './card/card.component';
import { MovieListComponent } from './list/list.component';

@NgModule({
  declarations: [
    AppComponent,
    MainMenuBarComponent,
    MovieCardComponent,
    MovieListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
