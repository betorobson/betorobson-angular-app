import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

import blah from './blah.webpacktestloader';
import blah2 from './blah.js';

import './icons-svg/icons-svg.js';
// import './assets/icons-svg/camera.svg';

console.log(blah);
console.log(blah2);

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
