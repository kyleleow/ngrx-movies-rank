import { getTestBed, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { provideMockStore } from '@ngrx/store/testing';
import { MovieService } from './movie.service';
import { Movie } from './models/movie.model';

describe('MovieService', () => {
  let injector: TestBed;
  let movieService: MovieService;
  let httpMock: HttpTestingController;
  const initialState = { movies: [] };

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ],
      providers: [
        provideMockStore({ initialState }),
        MovieService
      ],
    });

    injector = getTestBed();
    movieService = TestBed.inject(MovieService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should return a list of movies', () => {
    const dummyMovies: Movie[] = [
      {id: 1, title: 'Movie A', rating: 1, posterUrl: 'https://google.com'},
      {id: 2, title: 'Movie B', rating: 2, posterUrl: 'https://google.com'}
    ];

    movieService.getAll().subscribe(movies => {
      expect(movies.length).toBe(2);
    });

    const request = httpMock.expectOne('./assets/movies.json');
    expect(request.request.method).toBe('GET');
    request.flush(dummyMovies);
  });
});
