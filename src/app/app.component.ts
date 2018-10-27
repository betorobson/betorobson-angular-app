import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = 'betorobson-angular-app';
  changeTitle = function() {
    this.title = 'blah';
  };
}
