import {NgModule} from '@angular/core';
import {HomeRoutingModule} from "./home-routing.module";
import {ReactiveFormsModule} from "@angular/forms";
import {SharedModule} from "../shared/shared.module";
import {HomeComponent} from "./home.component";
import {HomeItemComponent} from "./home-item/home-item.component";
import {HomeEditComponent} from "./home-edit/home-edit.component";

@NgModule({
  declarations: [
    HomeComponent,
    HomeItemComponent,
    HomeEditComponent,
  ],
  imports: [
    SharedModule,
    ReactiveFormsModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
