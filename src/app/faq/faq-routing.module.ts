import {NgModule} from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {FaqComponent} from "./faq.component";
import * as AuthGuard from "../auth/auth-guard.service";
import * as Resolver from "../app.resolver";
import {FaqEditComponent} from "./faq-edit/faq-edit.component";

const routes: Routes = [
  {
    path: '', component: FaqComponent,
    canActivateChild: [AuthGuard.canActivateChild],
    resolve: [Resolver.faqAnswerResolver],
    children: [
      {path: 'new', component: FaqEditComponent},
      {path: ':id', component: FaqEditComponent},
    ]
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FaqRoutingModule {
}
