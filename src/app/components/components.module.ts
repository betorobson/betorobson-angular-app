import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

// import { AppRoutingModule } from '../app-routing.module';

// import { MainControllerComponent } from './main-controller/main-controller.component';
import { NavigationBarComponent } from './navigation-bar/navigation-bar.component';
import { ReportsComponent } from './reports/reports.component';

@NgModule({
  declarations: [
    // MainControllerComponent,
    NavigationBarComponent,
    ReportsComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([])
  ],
  exports: [
    NavigationBarComponent,
    ReportsComponent,
    RouterModule
    // MainControllerComponent
  ]
})

export class ComponentsModule { }
// export { MainControllerComponent };
