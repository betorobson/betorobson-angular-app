import { Component, OnInit } from '@angular/core';
import { routeExportConfig } from '../../heroes/heroes-routing.module';

@Component({
  selector: 'navigation-bar',
  templateUrl: './navigation-bar.component.html',
  styleUrls: ['./navigation-bar.component.scss']
})

export class NavigationBarComponent implements OnInit {

  title = 'betorobson-angular-app';

  HeroesRouteConfig = routeExportConfig;

  constructor() {
    console.log(routeExportConfig);
  }

  ngOnInit() {
  }

  changeTitle = function() {
    routeExportConfig.label = 'mudei o route label kkkk';
    this.title = 'blah';
  };

}
