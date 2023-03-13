import {Component, OnDestroy, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {environment} from "../environments/environment";
import {AuthService} from "../auth/auth.service";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, OnDestroy{
  title!: string
  isAuthenticated = false
  userSubscription?:Subscription
  constructor(
    private router: Router,
    private authService:AuthService
  ) { }

  ngOnInit(): void {
    this.title = environment.title

    this.userSubscription = this.authService.userSet.subscribe(user =>
      this.isAuthenticated = !!user
    )
  }

  onLoginClicked() {
    this.router.navigate(['/auth']).then()
  }
  onLogoutClicked() {
    this.authService.handleLogout()
  }

  ngOnDestroy(): void {
    this.userSubscription?.unsubscribe()
  }
}
