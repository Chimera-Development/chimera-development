import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FaqRoutingModule} from "./faq-routing.module";
import {ReactiveFormsModule} from "@angular/forms";



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FaqRoutingModule
  ]
})
export class FaqModule { }
