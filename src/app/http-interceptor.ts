import { Injectable } from '@angular/core';

import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpResponse,
  HttpErrorResponse
} from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable()

export class HttpInterceptorApp implements HttpInterceptor {

  constructor() { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    request = request.clone({
      setHeaders: {
        Authorization: 'asdjashgd-12312-adasd-123123'
      }
    });

    return next.handle(request);
  }

}

@Injectable()

export class NoopInterceptor implements HttpInterceptor {

  // best answer
  // https://stackoverflow.com/questions/50970446/http-error-handling-in-angular-6

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    return next.handle(req)
      .pipe(
        catchError( (error: any, caught: Observable<HttpEvent<any>>) => {

          error.friendlyMessage = {
            title: 'blah'
          };

          throw error;

        })
      );

  }

}
