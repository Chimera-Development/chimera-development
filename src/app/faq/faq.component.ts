import {Component, OnDestroy, OnInit} from '@angular/core';
import {FaqAnswer} from "../model/faq-answer";
import {FaqService} from "./faq.service";
import {Observable, Subscription} from "rxjs";
import {ActivatedRoute, Router} from "@angular/router";
import {AuthService} from "../auth/auth.service";
import {DataStorageService} from "../data-storage.service";
import {CanComponentDeactivate} from "../auth/can-deactivate-guard.service";

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html'
})
export class FaqComponent implements OnInit, OnDestroy, CanComponentDeactivate {
  faqAnswers!: FaqAnswer[]
  faqSubscription?:Subscription
  isAuthenticated:boolean = false
  userSubscription?:Subscription
  message: string | null = null

  unsavedChanges = false

  constructor(
    private faqService: FaqService,
    private router: Router,
    private route: ActivatedRoute,
    private authService: AuthService,
    private storage: DataStorageService
  ) { }
  ngOnInit(): void {
    this.faqAnswers = this.faqService.getAnswers()

    this.faqSubscription = this.faqService.faqUpdated.subscribe(
      answers => {
        this.faqAnswers = answers
        this.unsavedChanges = true
      }

    )

    this.userSubscription = this.authService.userSet.subscribe(user =>
      this.isAuthenticated = !!user
    )
  }

  canDeactivate(): boolean | Observable<boolean> {
    if(this.unsavedChanges) {
      if(confirm('Would you like to save the changes?')) this.onSaveChanges()
    }
    return true
  }

  onAddQuestion() {
    this.router.navigate(['new'], { relativeTo: this.route }).then()
  }

  onSaveChanges() {
    this.storage.saveAnswers().subscribe({
      next: _ => this.message = '✔️ Changes have been saved successfully.',
      error: err => this.message = err
    })
  }

  ngOnDestroy(): void {
    this.faqSubscription?.unsubscribe()
    this.userSubscription?.unsubscribe()
  }

  onPopupHandle() {
    this.message = null
  }
}
