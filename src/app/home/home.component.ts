import {Component, OnDestroy, OnInit} from '@angular/core';
import {environment} from "../environments/environment";
import {Update} from "../model/update";
import {UpdateService} from "./update.service";
import {ActivatedRoute, Router} from "@angular/router";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {
  title!: string

  updates!: Update[]
  updateSubscription?: Subscription

  constructor(
    private updateService: UpdateService,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.title = environment.title
    this.updates = this.updateService.getUpdates()

    this.updateSubscription = this.updateService.itemsUpdated.subscribe(
      (updates:Update[]) => this.updates = updates
    )
  }

  onNewUpdate() {
    this.router.navigate(['new'],{
      relativeTo: this.route
    }).then()
  }

  ngOnDestroy(): void {
    this.updateSubscription?.unsubscribe()
  }
}
