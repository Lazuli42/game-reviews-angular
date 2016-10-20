import {Component} from '@angular/core';
import {Game} from './game.model';
import {Review} from './review.model';


@Component({
  selector: 'my-app',
  template: `
    <div class="container">
      <h1>Game Reviews</h1>
      <display-games
        [displayedGames]="masterGamesList"
      ></display-games>
    </div>
  `
})

export class AppComponent {
  public masterGamesList: Game[] = [
     new Game("Pokemon Sun", "RPG", "Gamefreak", 40, 1),
     new Game("Dont Starve", "Survival", "Klei", 15, 2),
     new Game("The Witcher 3: Wild Hunt", "RPG", "CD Projekt Red", 40, 3)
  ];
}
