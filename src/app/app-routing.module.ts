import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {FaqComponent} from "./faq/faq.component";
import {AboutComponent} from "./about/about.component";
import {HomeComponent} from "./home/home.component";
import {AuthComponent} from "./auth/auth.component";
import {ErrorComponent} from "./error/error.component";
import {HomeEditComponent} from "./home/home-edit/home-edit.component";

import * as AuthGuard from "./auth/auth-guard.service"
import * as Resolver from "./app.resolver"
import {FaqEditComponent} from "./faq/faq-edit/faq-edit.component";

const appRoutes:Routes = [
  {path:'', redirectTo:'/home', pathMatch:'full'},
  {path:'home', component:HomeComponent,
    canActivateChild:[AuthGuard.canActivateChild],
    resolve:[Resolver.updateResolver],
    children: [
      {path: 'new', component: HomeEditComponent},
      {path: ':id', component: HomeEditComponent}
    ]},
  {path:'faq', component:FaqComponent,
    children: [
      {path: 'new', component: FaqEditComponent},
      {path: ':id', component: FaqEditComponent}
    ]},
  {path:'auth', component:AuthComponent},
  {path:'about', component:AboutComponent},
  {path:'error', component:ErrorComponent},
  { path: '**', redirectTo: '/error', pathMatch: 'full' }
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(appRoutes, {useHash: true})
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
