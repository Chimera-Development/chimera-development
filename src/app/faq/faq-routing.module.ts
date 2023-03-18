import {NgModule} from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {FaqComponent} from "./faq.component";
import * as AuthGuard from "../auth/auth-guard.service";
import * as Resolver from "../app.resolver";
import * as DeactivateGuard from "../auth/can-deactivate-guard.service"
import {FaqEditComponent} from "./faq-edit/faq-edit.component";

const routes: Routes = [
  {
    path: '', component: FaqComponent,
    canActivateChild: [AuthGuard.canActivateChild],
    canDeactivate: [DeactivateGuard.canDeactivateDataGuard],
    resolve: [Resolver.faqAnswerResolver],
    children: [
      {path: 'new', component: FaqEditComponent, canDeactivate: [DeactivateGuard.canDeactivateFormGuard]},
      {path: ':id', component: FaqEditComponent, canDeactivate: [DeactivateGuard.canDeactivateFormGuard]},
    ]
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FaqRoutingModule {
}
