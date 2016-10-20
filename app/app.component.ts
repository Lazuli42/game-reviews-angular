import {Component} from '@angular/core';
import {Game} from './game.model';
import {Review} from './review.model';


@Component({
  selector: 'my-app',
  template: `
    <div class="container">
      <div class="row">
        <div class="col-sm-6">
          <h1>Game Reviews</h1>

          <display-games
            [displayedGames]="masterGamesList"
            (displayGamesEvent)="displayGamesSendData($event)"
          ></display-games>
        </div>

        <div class="col-sm-6">
          <game
            [game]="sentGame"
          ></game>
        </div>
      </div>
    </div>
  `
})

export class AppComponent {
  public masterGamesList: Game[] = [
     new Game("Pokemon Sun", "RPG", "Gamefreak", 40, 1),
     new Game("Dont Starve", "Survival", "Klei", 15, 2),
     new Game("The Witcher 3: Wild Hunt", "RPG", "CD Projekt Red", 40, 3)
  ];
  public sentGame: Game;
  displayGamesSendData(clickedGame: Game) {
    this.sentGame = clickedGame;
  }
}
