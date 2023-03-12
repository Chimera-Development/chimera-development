import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {FaqComponent} from "./faq/faq.component";
import {AboutComponent} from "./about/about.component";
import {HomeComponent} from "./home/home.component";
import {AuthComponent} from "./auth/auth.component";
import {ErrorComponent} from "./error/error.component";
import {HomeEditComponent} from "./home/home-edit/home-edit.component";

const appRoutes:Routes = [
  {path:'', redirectTo:'/home', pathMatch:'full'},
  {path:'home', component:HomeComponent, children: [
      {path: 'new', component: HomeEditComponent},
      {path: ':id', component: HomeEditComponent}
    ]},
  {path:'faq', component:FaqComponent},
  {path:'about', component:AboutComponent},
  {path:'auth', component:AuthComponent},
  {path:'error', component:ErrorComponent, data:{ message: '404 | not found'} },
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
