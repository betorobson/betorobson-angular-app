import { Injectable, Component } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class ReportsService {

  constructor(
    private http: HttpClient,
  ) {

  }

  getReports(): Observable<HttpResponse<any>> {

    // console.log(component);

    let x = this.http.get<any>(
      'http://localhost:3000/leads-by-product/',
      {
        observe: 'response'
      }
    );

    return x;

  }

};
