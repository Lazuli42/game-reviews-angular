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
     new Game("The Witcher 3: Wild Hunt", "RPG", "CD Projekt Red", 40, 3),
     new Game("Mountain Blade", "FPS", "TaleWorlds", 20, 4),
     new Game("Sid Meier's Civilization® VI", "Strategy", "Firaxis", 60, 5),
     new Game("Total War: WARHAMMER", "Strategy", "Creative Assembly", 60, 6),
     new Game("Thumper", "Rhythm", "Drool", 20, 7),
     new Game("Stellaris", "4X", "Paradox Interactive", 40, 8),
     new Game("Farming Simulator 17", "Simulation", "Giants Software", 40, 9),
     new Game("The Witness", "Puzzle", "Thekla", 40, 10),
     new Game("Dark Souls III", "Action", "From Software", 40, 11),
     new Game("Stardew Valley", "Simulation", "ConcernedApe", 15, 12),
     new Game("RimWorld", "Base-Building", "Ludeon Studios", 30, 13),
     new Game("Osiris: New Dawn", "Survival", "Fenix Fire Entertainment", 25, 14),
     new Game("Clustertruck", "Action", "Landfall Games", 15, 15),
     new Game("Starbound", "Adventure", "Chucklefish", 15, 16),
     new Game("Undertale", "RPG", "tobyfox", 10, 17),
     new Game("Kerbal Space Program", "Simulation", "Squad", 40, 18),
     new Game("XCOM 2", "Strategy", "Firaxis", 60, 19)
  ];
  public sentGame: Game;
  displayGamesSendData(clickedGame: Game) {
    this.sentGame = clickedGame;
  }
}
