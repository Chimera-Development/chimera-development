import {NgModule} from '@angular/core';
import {FaqRoutingModule} from "./faq-routing.module";
import {ReactiveFormsModule} from "@angular/forms";
import {SharedModule} from "../shared/shared.module";
import {FaqItemComponent} from "./faq-item/faq-item.component";
import {FaqEditComponent} from "./faq-edit/faq-edit.component";
import {FaqComponent} from "./faq.component";


@NgModule({
  declarations: [
    FaqComponent,
    FaqItemComponent,
    FaqEditComponent
  ],
  imports: [
    SharedModule,
    ReactiveFormsModule,
    FaqRoutingModule
  ]
})
export class FaqModule { }
