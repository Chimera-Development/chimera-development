import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {HeaderComponent} from './header/header.component';
import {AuthComponent} from './auth/auth.component';
import {HomeComponent} from './home/home.component';
import {HomeItemComponent} from './home/home-item/home-item.component';
import {AboutComponent} from './about/about.component';
import {FaqComponent} from './faq/faq.component';
import {AppRoutingModule} from "./app-routing.module";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {ErrorComponent} from './error/error.component';
import {AlertComponent} from './shared/alert/alert.component';
import {HomeEditComponent} from './home/home-edit/home-edit.component';
import {AuthInterceptor} from "./auth/auth.interceptor";
import { FaqItemComponent } from './faq/faq-item/faq-item.component';
import { FaqEditComponent } from './faq/faq-edit/faq-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AuthComponent,
    HomeComponent,
    HomeItemComponent,
    AboutComponent,
    FaqComponent,
    ErrorComponent,
    AlertComponent,
    HomeEditComponent,
    FaqItemComponent,
    FaqEditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: AuthInterceptor,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
