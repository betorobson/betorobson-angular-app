import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'navigation-bar',
  templateUrl: './navigation-bar.component.html',
  styleUrls: ['./navigation-bar.component.scss']
})
export class NavigationBarComponent implements OnInit {

  title = 'betorobson-angular-app';

  constructor() { }

  ngOnInit() {
  }

  changeTitle = function() {
    this.title = 'blah';
  };

}
