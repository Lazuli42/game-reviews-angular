import {Pipe, PipeTransform} from '@angular/core';
import {Game} from './game.model';

@Pipe({
  name: "genreFilter",
  pure: false
})

export class GenreFilterPipe implements PipeTransform {
  transform(input: Game[], selectedGenre) {
    console.log(selectedGenre);
    var output = [];
    if (selectedGenre != null) {
      var lowSelectedGenre = selectedGenre.toLowerCase();
      for(var i = 0; i < input.length; i++) {
        var lowGameGenre = input[i].genre.toLowerCase();
        if (lowSelectedGenre === lowGameGenre) {
          output.push(input[i]);
        }
      }
      return output;
    } else {
      return input;
    }
  }
}
