import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';

import { Hero } from './hero';
import { HEROES } from './hero-mocks';
import { MessageService } from './message.service';
import { HttpErrorHandler } from './http-error-handler';

@Injectable({
  providedIn: 'root'
})

export class HeroService {

  private heroesUrl = '//localhost:3000/heroes';
  private httpErrorHandler;

  constructor(
    private http: HttpClient,
    private messageService: MessageService,
    httpErrorHandler: HttpErrorHandler
  ) {
    this.httpErrorHandler = httpErrorHandler.createHandleError('HeroService');
  }

  /** Log a HeroService message with the MessageService */
  private log(message: string) {
    this.messageService.add(`HeroService: ${message}`);
  }

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  private handleErrorSimple<T> () {
    return (error: HttpErrorResponse) => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      // this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      // return of(null as T);
    };
  }

  getHeroes(): Observable<Hero[]> {

    // TODO: send the message _after_ fetching the heroes
    this.messageService.add('HeroService: fetched heroes');

    return this.http.get<Hero[]>(this.heroesUrl)

    .pipe(
      tap(heroes => this.log('fetched heroes')),
      catchError(this.handleError('getHeroes', []))
    );

  }

  getHero(id: number): Observable<Hero> {

    const url = `${this.heroesUrl}/${id}`;

    return this.http.get<Hero>(url)
      .pipe(
        // catchError(err => {
        //   console.log(err.headers.keys());
        //   throw err;
        // })
        catchError(this.httpErrorHandler('getCustomers', []))
        // catchError(err => {
        //   return throwError(err);
        // })
      )
    ;

    // return this.http.get<Hero>(url).pipe(
    //   tap(_ => this.log(`fetched hero id=${id}`)),
    //   catchError(this.handleError<Hero>(`getHero id=${id}`))
    // );

  }

}
