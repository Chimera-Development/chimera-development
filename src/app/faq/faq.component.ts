import {Component, OnDestroy, OnInit} from '@angular/core';
import {FaqAnswer} from "../model/faq-answer";
import {FaqService} from "./faq.service";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.css']
})
export class FaqComponent implements OnInit, OnDestroy {
  faqAnswers!: FaqAnswer[]
  faqSubscription?:Subscription
  constructor(
    private faqService: FaqService
  ) { }
  ngOnInit(): void {
    this.faqAnswers = this.faqService.getAnswers()

    this.faqSubscription = this.faqService.faqUpdated.subscribe(
      answers => this.faqAnswers = answers
    )
  }

  ngOnDestroy(): void {
    this.faqSubscription?.unsubscribe()
  }
}
