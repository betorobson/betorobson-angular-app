import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

// import { AppRoutingModule } from '../app-routing.module';

// import { MainControllerComponent } from './main-controller/main-controller.component';
import { NavigationBarComponent } from './navigation-bar/navigation-bar.component';
import { ReportsComponent } from './reports/reports.component';

import { FormlyModule } from '@ngx-formly/core';
import { FormlyFieldCustomInput } from './custom-input/custom-input';
import { FormControl } from '@angular/forms';

export function defaultInputValidator(control: FormControl): boolean {
  console.log('defaultInputValidator: ', control);
  return !/noop/.test(control.value);
}

@NgModule({
  declarations: [
    // MainControllerComponent,
    NavigationBarComponent,
    ReportsComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([]),
    FormlyModule.forRoot({
      types: [
        {
          name: 'inputFromComponents',
          component: FormlyFieldCustomInput,
          defaultOptions: {
            validators: {
              defaultInputValidator
            }
          }
        }
      ]
    })
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
