import {NgModule} from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {HomeComponent} from "./home.component";
import {HomeEditComponent} from "./home-edit/home-edit.component";
import * as AuthGuard from "../auth/auth-guard.service";
import * as Resolver from "../app.resolver";
import * as DeactivateGuard from "../auth/can-deactivate-guard.service"

const routes: Routes = [
  {
    path: '', component: HomeComponent,
    canActivateChild: [AuthGuard.canActivateChild],
    resolve: [Resolver.updateResolver],
    children: [
      {path: 'new', component: HomeEditComponent, canDeactivate: [DeactivateGuard.canDeactivateFormGuard]},
      {path: ':id', component: HomeEditComponent, canDeactivate: [DeactivateGuard.canDeactivateFormGuard]}
    ]
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule {
}
