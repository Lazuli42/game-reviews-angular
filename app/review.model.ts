export class Review {
  constructor(
    public user: string,
    public rating: string,
    public description: string,
    public gameId: number
  ) {}
}
