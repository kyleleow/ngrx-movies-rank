# NgrxMoviesRank
Demo: [link](https://kyleleow.github.io/ngrx-movies-rank/)
1. Uses only one custom UI component `<app-list>` that includes a table list and a button, all design are custom-coded, no external UI libraries were used
2. Calls a mock API by using `http.get()` to retrieve local JSON file to be used as movies data
3. Using `ngRx` for state management
4. Every time when user click on `Start Rating` button, a random number of seconds of timer will be created, and shown besides the button text
5. Upon reaching `0` , an action will be dispatched to the `store` and return a new list with random items given with a new random rating of 1-10
6. Unless `Stop Rating` is clicked, Step 4 - 5 will be repeated endlessly
7. This project is **mobile-responsive**

## Unit Tests
Total of 9 tests <sup id="a1">[1](#myfootnote1)</sup> were written for the following `.ts` in their corresponding `.spec.ts`:
- `app-component`
- `app-list.compononent`
- `movie.service`
- `movie.reducers`
- `movie.selectors`

## Deployment
Deployment to GitHub is using [angular-cli-ghpages](https://github.com/angular-schule/angular-cli-ghpages).
Running `ng deploy` will deploy to GitHub repo defined in `angular.json`

## Commit Message
Format is following the [angular commit message format](https://github.com/angular/angular/blob/master/CONTRIBUTING.md)

---
<a id="myfootnote1">1</a>: Tests were written with the purpose to verify the main functionalities. Hence, it does not cover e2e tests and does not achieve 100% code coverage.[↩](#a1)
