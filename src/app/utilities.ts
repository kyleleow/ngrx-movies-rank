import { Observable, timer } from 'rxjs';
import { map, take } from 'rxjs/operators';
import { Movie } from './models/movie.model';

export function compareRateInDescending(a: Movie, b: Movie): number {
  if (a.rating > b.rating) {
    return -1;
  } else if (a.rating < b.rating) {
    return 1;
  } else {
    return 0;
  }
}

export function getRandomInteger(min: number = 1, max: number = 10): number {
    if (min > max) {
        console.error('Min should be less than max.\nGenerating a number between 1 to 10..');
        return Math.floor(Math.random() * 10) + 1;
    }
    return Math.floor(Math.random() * max) + min;
}

export function getRandomIntegerArray(referenceArray: any[], newArrayLength: number): any[] {
  const result = new Array(newArrayLength);
  let referenceArrayLength = referenceArray.length;
  const taken = new Array(referenceArrayLength);

  if (newArrayLength > referenceArrayLength) {
    throw new RangeError('getRandom: more elements taken than available');
  }

  while (newArrayLength--) {
      const x = Math.floor(Math.random() * referenceArrayLength);
      result[newArrayLength] = referenceArray[x in taken ? taken[x] : x];
      taken[x] = --referenceArrayLength in taken ? taken[referenceArrayLength] : referenceArrayLength;
  }
  return result;
}

export function getTimer(time: number): Observable<number> {
    if (time < 0) {
        console.warn('Invalid time given to timer, default to 0.')
        time = 0;
    }

    return timer(0, 1000).pipe(
        map(i => time - i),
        take(time + 1)
      );
}
