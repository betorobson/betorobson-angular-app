import { Injectable } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';

export type HandleError = <T> (operation?: string, result?: T) => (error: HttpErrorResponse) => Observable<T>;

/** Handles HttpClient errors */
@Injectable({
  providedIn: 'root'
})

export class HttpErrorHandler {

  // constructor(private errorService: ErrorService) { }
  constructor() { }

  /** Create handleError function that already knows the service name */
  createHandleError = (serviceName = '') => <T>
    (operation = 'operation', result = {} as T) => this.handleError(serviceName, operation, result)

  handleError<T> (serviceName = '', operation = 'operation', result = {} as T) {

    return (error: HttpErrorResponse): Observable<T> => {

      // Todo -> Send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // const message = (error.error instanceof ErrorEvent) ?
      //   error.error.message :
      //  `{error code: ${error.status}, body: "${error.message}"}`;

      throw error;

      // -> Return a safe result.
      // return of( result );
    };
  }
}
