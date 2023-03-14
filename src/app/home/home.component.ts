import {Component, OnDestroy, OnInit} from '@angular/core';
import {environment} from "../environments/environment";
import {Update} from "../model/update";
import {UpdateService} from "./update.service";
import {ActivatedRoute, Router} from "@angular/router";
import {Subscription} from "rxjs";
import {AuthService} from "../auth/auth.service";
import {DataStorageService} from "../data-storage.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {
  title!: string

  updates!: Update[]
  updateSubscription?: Subscription
  userSubscription?: Subscription
  isAuthenticated = false

  message: string | null = null

  constructor(
    private updateService: UpdateService,
    private authService: AuthService,
    private router: Router,
    private route: ActivatedRoute,
    private storage: DataStorageService
  ) { }

  ngOnInit(): void {
    this.title = environment.title
    this.updates = this.updateService.getUpdates()

    this.updateSubscription = this.updateService.itemsUpdated.subscribe(
      (updates:Update[]) => this.updates = updates
    )

    this.userSubscription = this.authService.userSet.subscribe(user =>
      this.isAuthenticated = !!user
    )
  }

  onNewUpdate() {
    this.router.navigate(['new'],{
      relativeTo: this.route
    }).then()
  }

  ngOnDestroy(): void {
    this.updateSubscription?.unsubscribe()
    this.userSubscription?.unsubscribe()
  }

  onSaveAllUpdates() {
    this.storage.saveUpdates().subscribe({
      next: _ => this.message = '✔️ Changes have been saved successfully.',
      error: err => this.message = err
    })
  }

  onPopupHandle() {
    this.message = null
  }
}
