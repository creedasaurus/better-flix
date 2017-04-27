import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// Angular Material stuff vvv
import {
  MdCardModule,
  MdButtonModule,
  MdButtonToggleGroup,
  MdToolbarModule,
  MdIconModule,
  MdInputModule,
  MdSelectModule,
  MdSidenavModule,
  MdListModule,
  MdDialogModule
} from '@angular/material';


import { AppComponent } from './app.component';
import { MenuBarComponent } from './menu/menu.component';
import { MovieCardComponent } from './card/card.component';
import { MovieContainerComponent } from './movie-container/movie-container.component';
import { MoviesService } from './movies/movies.service';
import { MovieTableComponent } from './table/table.component';

@NgModule({
  imports: [
    BrowserAnimationsModule,
    MdIconModule,
    MdCardModule,
    MdButtonModule,
    MdButtonToggleGroup,
    MdToolbarModule,
    MdInputModule,
    MdSelectModule,
    MdSidenavModule,
    MdDialogModule,
    BrowserModule,
    FormsModule,
    HttpModule,
    MdListModule
  ],
  declarations: [
    AppComponent,
    MenuBarComponent,
    MovieCardComponent,
    MovieTableComponent,
    MovieContainerComponent
  ],
  providers: [MoviesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
