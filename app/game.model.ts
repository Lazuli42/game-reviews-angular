export class Game {
  public displayDetails: boolean = false;
  public averageGameRating: number;
  constructor(
    public name: string,
    public genre: string,
    public developer: string,
    public price: number,
    public id: number
  ) {}
}
