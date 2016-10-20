
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Game } from './game.model';

@Component({
  selector: 'display-games',
  template: `
    <label>Search by Genre</label>
    <input type="text" (change)="filterByGenre($event.target.value)">

    <div *ngFor="let game of displayedGames | genreFilter:genreToFilter">
      <h4 (click)="clickGameInfo(game)">{{game.name}}</h4>
      <game *ngIf="showGameDetails"></game>
    </div>
  `
})

export class DisplayGamesComponent {
  @Input() displayedGames: Game[];
  @Output() displayGamesEvent = new EventEmitter();
  public showGameDetails: boolean = false;
  public genreToFilter: string;

  clickGameInfo(clickedGame: Game){
    this.displayGamesEvent.emit(clickedGame);
  }
  filterByGenre(inputGenre) {
    this.genreToFilter = inputGenre;
  }
}
