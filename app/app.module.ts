import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }   from './app.component';
import { DisplayGamesComponent }   from './display-games.component';

@NgModule({
  imports: [BrowserModule],

  declarations: [
    AppComponent,
    DisplayGamesComponent
  ],
  
  bootstrap: [ AppComponent ]
})

export class AppModule { }
