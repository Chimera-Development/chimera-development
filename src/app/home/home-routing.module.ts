import {NgModule} from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {HomeComponent} from "./home.component";
import * as AuthGuard from "../auth/auth-guard.service";
import * as Resolver from "../app.resolver";
import {HomeEditComponent} from "./home-edit/home-edit.component";

const routes: Routes = [
  {
    path: '', component: HomeComponent,
    canActivateChild: [AuthGuard.canActivateChild],
    resolve: [Resolver.updateResolver],
    children: [
      {path: 'new', component: HomeEditComponent},
      {path: ':id', component: HomeEditComponent}
    ]
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule {
}
