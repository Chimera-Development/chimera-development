import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {FaqComponent} from "./faq/faq.component";
import {AboutComponent} from "./about/about.component";
import {HomeComponent} from "./home/home.component";
import {AuthComponent} from "./auth/auth.component";

const appRoutes:Routes = [
  {path:'', redirectTo:'/home', pathMatch:'full'},
  {path:'home', component:HomeComponent},
  {path:'faq', component:FaqComponent},
  {path:'about', component:AboutComponent},
  {path:'auth', component:AuthComponent},
  { path: '**', redirectTo: '/home', pathMatch: 'full' }
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
