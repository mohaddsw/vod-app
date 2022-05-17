export interface MovieState {
  topMovies: Array<topMovie>;
}
interface topMovie {
  crew: string;
  fullTitle: string;
  id: string;
  imDbRating: string;
  imDbRatingCount: string;
  image: string;
  rank: string;
  title: string;
  year: string;
}
