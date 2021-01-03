import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { AppComponent } from './app.component';
import { AppListComponent } from './app-list/app-list.component';
import * as fromMovie from './reducers/movie.reducer';
import { MovieEffects } from './effects/movie.effects';

@NgModule({
  declarations: [
    AppComponent,
    AppListComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    StoreModule.forRoot({ movies: fromMovie.movieReducer}),
    HttpClientModule,
    EffectsModule.forRoot([MovieEffects]),
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
