import { NgModule } from '@angular/core';
import { Route, Routes, RouterModule } from '@angular/router';

import { HeroesComponent } from './heroes.component';

const routeConfig = {
  path: 'balh-heroes',
  component: HeroesComponent
};

const routes: Routes = [
  routeConfig
];

const routeExportConfig = {
  path: routeConfig.path,
  label: 'Meus herois'
}

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class HeroesRoutingModule {}

export {
  routeExportConfig
};
