import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {Observable, Subscription} from "rxjs";

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.css']
})
export class ErrorComponent implements OnInit, OnDestroy {
  message: Observable<string> | undefined
  messageSubscription?:Subscription

  constructor(private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.messageSubscription = this.route.queryParams.subscribe(params => {
        const msg = params['message']
        this.message = msg ? msg : 'Error: 404 | Not found.'
      })
  }

  ngOnDestroy(): void {
    this.messageSubscription?.unsubscribe()
  }
}
