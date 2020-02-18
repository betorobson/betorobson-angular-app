import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { HttpInterceptorApp, NoopInterceptor } from './http-interceptor';

import { ComponentsModule } from './components/components.module';
import { MainControllerComponent } from './components/components.module';

// import { MainControllerComponent } from './components/main-controller/main-controller.component';
import { HeroesComponent } from './heroes/heroes.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { MessagesComponent } from './messages/messages.component';
import { DashboardComponent } from './views/dashboard/dashboard.component';
import { FormlyModule } from '@ngx-formly/core';
import { FormlyFieldCustomInput } from './components/custom-input/custom-input';

// import { NavigationBarComponent } from './components/navigation-bar/navigation-bar.component';

@NgModule({
  declarations: [
    MainControllerComponent,
    HeroesComponent,
    HeroDetailComponent,
    MessagesComponent,
    DashboardComponent,
    FormlyFieldCustomInput
    // NavigationBarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ComponentsModule,
    ReactiveFormsModule,
    FormlyModule.forRoot({
      types: [
        { name: 'custom', component: FormlyFieldCustomInput }
      ]
    })
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpInterceptorApp,
      multi: true
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: NoopInterceptor,
      multi: true
    }
  ],
  bootstrap: [MainControllerComponent]
})
export class AppModule { }
