import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {FaqService} from "../faq.service";
import {FaqAnswer} from "../../model/faq-answer";
import {ActivatedRoute, Router} from "@angular/router";
import {AuthService} from "../../auth/auth.service";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-faq-item',
  templateUrl: './faq-item.component.html'
})
export class FaqItemComponent implements OnInit, OnDestroy {
  @Input('answerIndex') answerIndex!: number
  @Input('faqAnswer') faqAnswer!: FaqAnswer

  isAuthenticated: boolean = false
  userSubscription?:Subscription

  constructor(
    private faqService: FaqService,
    private router:Router,
    private route: ActivatedRoute,
    private authService: AuthService
  ) { }

  ngOnInit(): void {
    this.userSubscription = this.authService.userSet.subscribe(user =>
      this.isAuthenticated = !!user
    )
  }

  onShiftUpClicked() {
    this.faqService.shiftItemUpByIndex(this.answerIndex)
  }
  onEditClicked() {
    this.router.navigate([this.answerIndex], { relativeTo: this.route}).then()
  }
  onDeleteClicked() {
    this.faqService.deleteItemById(this.answerIndex)
  }

  ngOnDestroy(): void {
    this.userSubscription?.unsubscribe()
  }
}
