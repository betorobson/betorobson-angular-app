import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppRoutingModule } from '../app-routing.module';

import { MainControllerComponent } from './main-controller/main-controller.component';
import { NavigationBarComponent } from './navigation-bar/navigation-bar.component';

@NgModule({
  declarations: [
    // MainControllerComponent,
    NavigationBarComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule
  ],
  exports: [
    NavigationBarComponent,
    // MainControllerComponent
  ]
})

export class ComponentsModule { }
export { MainControllerComponent };
