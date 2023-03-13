import {Component, Input, OnInit} from '@angular/core';
import {Update} from "../../model/update";
import {ActivatedRoute, Router} from "@angular/router";
import {UpdateService} from "../update.service";
import {AuthService} from "../../auth/auth.service";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-home-item',
  templateUrl: './home-item.component.html',
  styleUrls: ['./home-item.component.css']
})
export class HomeItemComponent implements OnInit {
  @Input('updateCard') update!: Update
  @Input('itemId') id!:number
  userSubscription?:Subscription
  isAuthenticated = false

  constructor(
    private updateService:UpdateService,
    private authService: AuthService,
    private router:Router,
    private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.userSubscription = this.authService.userSet.subscribe(user =>
      this.isAuthenticated = !!user
    )
  }

  onUpdateSelected() {
    this.router.navigate([this.id], {
        queryParams: {edit: 1},
        relativeTo: this.route
      }
    ).then()
  }

  onUpdateDelete() {
    this.updateService.deleteUpdate(this.id)
  }
}
