import { Component, HostListener } from '@angular/core';
import { ReportsService } from '../../services/reports.service';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'reports',
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.scss']
})

@AutoUnsubscribe([])
export class ReportsComponent {

  ajax1;

  constructor(
    private reportsService: ReportsService
  ) { }

  ngOnInit() {

    this.ajax1 = this.reportsService.getReports()
      .pipe(
        // tap(this => console.log(this)),
        tap(response => console.log(123, response))
      )
      .subscribe(response => console.log(response));

    // this.on

  }

  // @HostListener('window:beforeunload')

  ngOnDestroy() {
    console.log('reports morreu');
  }

}

export function AutoUnsubscribe( blackList = [] ) {

  return function ( constructor ) {
    const original = constructor.prototype.ngOnDestroy;

    constructor.prototype.ngOnDestroy = function () {
      for ( let prop in this ) {
        const property = this[ prop ];
        console.log('-------:' + prop);
        if ( !blackList.includes(prop) ) {
          if ( property && ( typeof property.unsubscribe === "function" ) ) {
            property.unsubscribe();
          }
        }
      }
      original && typeof original === 'function' && original.apply(this, arguments);
    };
  }

}
