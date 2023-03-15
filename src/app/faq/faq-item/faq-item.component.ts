import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FaqService} from "../faq.service";
import {FaqAnswer} from "../../model/faq-answer";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-faq-item',
  templateUrl: './faq-item.component.html'
})
export class FaqItemComponent {
  @Input('answerIndex') answerIndex!: number
  @Input('faqAnswer') faqAnswer!: FaqAnswer

  constructor(
    private faqService: FaqService,
    private router:Router,
    private route: ActivatedRoute
  ) { }

  onShiftUpClicked() {
    this.faqService.shiftItemUpByIndex(this.answerIndex)
  }
  onEditClicked() {
    this.router.navigate([this.answerIndex], { relativeTo: this.route}).then()
  }
  onDeleteClicked() {
    this.faqService.deleteItemById(this.answerIndex)
  }
}
