export class Movie {
  id: string;
  imdbId: string;
  title: string;
  year: number;
  rated: string;
  released: Date;
  runtime: number;
  genre: string[];
  director: string[];
  writer: string[];
  actors: string[];
  plot: string;
  language: string;
  country: string[];
  awards: string;
  posterUrl: string;
  ratings: Array<{ Source: string; Value: string; }>;
  metascore: number;
  imdbRating: number;
  imdbVotes: number;
  imdbID: string;
  type: string;
  dvd: Date;
  boxOffice: string;
  production: string;
  website: string;

  constructor(partial?: Partial<Movie>) {
    if (partial !== undefined) {
      Object.assign(this, partial);
    }
  }
}
