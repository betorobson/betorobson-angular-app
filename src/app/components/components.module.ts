import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

// import { AppRoutingModule } from '../app-routing.module';

// import { MainControllerComponent } from './main-controller/main-controller.component';
import { NavigationBarComponent } from './navigation-bar/navigation-bar.component';

@NgModule({
  declarations: [
    // MainControllerComponent,
    NavigationBarComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([])
  ],
  exports: [
    NavigationBarComponent,
    RouterModule
    // MainControllerComponent
  ]
})

export class ComponentsModule { }
// export { MainControllerComponent };
