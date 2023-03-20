import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AlertComponent} from "./alert/alert.component";
import { PromptComponent } from './prompt/prompt.component';

@NgModule({
  declarations: [
    AlertComponent,
    PromptComponent
  ],
  imports: [CommonModule],
    exports: [
        CommonModule,
        AlertComponent,
        PromptComponent
    ]
})
export class SharedModule { }
