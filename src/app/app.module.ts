import { BrowserModule } from '@angular/platform-browser';
import { NgModule, APP_INITIALIZER, Injectable } from '@angular/core';

import { FormsModule, ReactiveFormsModule, FormControl } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { HttpInterceptorApp, NoopInterceptor } from './http-interceptor';

import { ComponentsModule } from './components/components.module';

import { MainControllerComponent } from './components/main-controller/main-controller.component';
// import { HeroesComponent } from './heroes/heroes.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { MessagesComponent } from './messages/messages.component';
import { DashboardComponent } from './views/dashboard/dashboard.component';
import { FormlyModule } from '@ngx-formly/core';
import { FormlyFieldCustomInput } from './components/custom-input/custom-input';
import { FormlyFieldCustomNoInput } from './components/custom-input/custom-no-input';

// import { NavigationBarComponent } from './components/navigation-bar/navigation-bar.component';

export function hasNoop(control: FormControl): boolean {
  console.log('custom input with validator', control);
  return !/noop/.test(control.value);
}

@Injectable()
export class AppInitService {

  constructor() {
  }

  Init() {

    return new Promise<void>((resolve, reject) => {
      console.log('AppInitService.init() called');
      console.log('Wait for 2 seconds please');
      setTimeout(() => {
          console.log('AppInitService Finished');
          resolve();
      }, 2000);
    });

  }

}

export function initializeApp1(
  appInitService: AppInitService
) {
  return (): Promise<any> => {
    return appInitService.Init();
    // return new Promise<void>((resolve, reject) => {
    //   console.log('AppInitService.init() called');
    //   setTimeout(() => {
    //       console.log('AppInitService Finished');
    //       resolve();
    //   }, 6000);
    // });
  };
}


@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ComponentsModule,
    ReactiveFormsModule,
    FormlyModule.forRoot({
      types: [
        {
          name: 'input',
          // extends: 'input',
          component: FormlyFieldCustomInput
        },
        {
          name: 'custom',
          // extends: 'input',
          component: FormlyFieldCustomInput,
          defaultOptions: {
            validators: {
              hasNoop: hasNoop
            }
          }
        },
        {
          name: 'custom-no-input',
          // extends: 'input',
          component: FormlyFieldCustomNoInput,
          defaultOptions: {
            validators: {
              hasNoop: hasNoop
            }
          }
        }
      ]
    })
  ],
  declarations: [
    MainControllerComponent,
    // HeroesComponent,
    HeroDetailComponent,
    MessagesComponent,
    DashboardComponent,
    FormlyFieldCustomInput,
    FormlyFieldCustomNoInput
    // NavigationBarComponent
  ],
  providers: [
    AppInitService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpInterceptorApp,
      multi: true
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: NoopInterceptor,
      multi: true
    },
    {
      provide: APP_INITIALIZER,
      useFactory: initializeApp1,
      deps: [AppInitService],
      multi: true
    },
  ],
  bootstrap: [MainControllerComponent]
})
export class AppModule { }
