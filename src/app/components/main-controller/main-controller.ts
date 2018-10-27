import { Component } from '@angular/core';

@Component({
  selector: 'main-controller',
  templateUrl: './main-controller.html',
  styleUrls: ['./main-controller.scss']
})

export class MainControllerComponent {

  title = 'betorobson-angular-app';

  changeTitle = function() {
    this.title = 'blah';
  };

}
