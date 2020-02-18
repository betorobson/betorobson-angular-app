import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainControllerComponent } from './main-controller/main-controller.component';
import { NavigationBarComponent } from './navigation-bar/navigation-bar.component';

@NgModule({
  declarations: [
    // MainControllerComponent,
    NavigationBarComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    NavigationBarComponent,
    // MainControllerComponent
  ]
})

export class ComponentsModule { }
export { MainControllerComponent };
