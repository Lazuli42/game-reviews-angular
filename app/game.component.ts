import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Game } from './game.model';
import { Review } from './review.model';

@Component({
  selector: 'game',
  template: `
    <div *ngIf="game">
      <h1>{{game.name}}</h1>
      <h4>$ {{game.price}}</h4>
      <h4>{{game.genre}}</h4>
      <h4>Developed by {{game.developer}}</h4>

      <div class="form-group">
        <label>Review this game:</label>
        <input #reviewUser type="text" placeholder="Username">
        <textarea #reviewText row="6" cols ="50" placeholder="Enter Text here..."></textarea>
        <button (click)="createReview(reviewUser.value, reviewText.value)">Submit</button>
      </div>

      <h3>Reviews</h3>
      <div *ngFor="let review of reviews">
        <p *ngIf="review.gameId == game.id">"{{review.description}}" -{{review.user}}</p>
      </div>
    </div>
  `
})

export class GameComponent {
  @Input() game: Game;
  public reviews: Review[] = [];
  createReview(newReviewUser, newReviewText) {
    var newReview = new Review (newReviewUser, newReviewText, this.game.id);
    this.reviews.push(newReview);
  }
}
