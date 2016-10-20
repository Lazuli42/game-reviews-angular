import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Game } from './game.model';
import { Review } from './review.model';

@Component({
  selector: 'game',
  template: `
    <div *ngIf="game">
      <h1>{{game.name}}</h1>
      <h4 *ngIf="game.averageGameRating">{{fixedAverage}}/5</h4>
      <h4>$ {{game.price}}</h4>
      <h4>{{game.genre}}</h4>
      <h4>Developed by {{game.developer}}</h4>

      <div class="form-group">
        <label>Review this game:</label>
        <input #reviewUser type="text" placeholder="Username">
        <select #reviewRating>
          <option value=5>★★★★★</option>
          <option value=4>★★★★</option>
          <option value=3 selected="selected">★★★</option>
          <option value=2>★★</option>
          <option value=1>★</option>
        </select>
        <textarea #reviewText row="6" cols ="50" placeholder="Enter Text here..."></textarea>
        <button (click)="createReview(reviewUser.value, reviewRating.value, reviewText.value)">Submit</button>
      </div>

      <h3>Reviews</h3>
      <div *ngFor="let review of reviews">
        <p *ngIf="review.gameId == game.id">{{review.rating}} stars "{{review.description}}" -{{review.user}}</p>
      </div>
    </div>
  `
})

export class GameComponent {
  @Input() game: Game;
  public reviews: Review[] = [];
  public fixedAverage:number;
  createReview(newReviewUser, newReviewRating, newReviewText) {
    var newReview = new Review (newReviewUser, newReviewRating, newReviewText, this.game.id);
    this.reviews.push(newReview);
    this.calculateAverageRating();
  }
  calculateAverageRating() {
    var totalRating: number = 0;
    var averageRating: number = 0;
    var numberToDivideBy: number = 0;
    for (var review of this.reviews) {
      if (review.gameId === this.game.id) {
        totalRating += Number(review.rating);
        numberToDivideBy++;
      }
    }
    console.log(review.rating);
    console.log(numberToDivideBy);
    averageRating = (totalRating / numberToDivideBy);
    this.game.averageGameRating = averageRating;
    this.fixedAverage = parseFloat(this.game.averageGameRating.toFixed(1));
  }
}
