
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Game } from './game.model';

@Component({
  selector: 'display-games',
  template: `
    <div *ngFor="let game of displayedGames">
      <h4>$ {{game.price}} {{game.name}}</h4>
    </div>
  `
})

export class DisplayGamesComponent {
  @Input() displayedGames: Game[];
}
