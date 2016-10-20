import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }   from './app.component';
import { DisplayGamesComponent }   from './display-games.component';
import { GameComponent } from './game.component';
import { GenreFilterPipe } from './genreFilter.pipe';

@NgModule({
  imports: [BrowserModule],

  declarations: [
    AppComponent,
    DisplayGamesComponent,
    GameComponent,
    GenreFilterPipe
  ],

  bootstrap: [ AppComponent ]
})

export class AppModule { }
