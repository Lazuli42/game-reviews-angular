export class Review {
  constructor(
    public user: string,
    public rating: number,
    public description: string,
    public gameId: number
  ) {}
}
