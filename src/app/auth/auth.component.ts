import {Component, OnInit} from '@angular/core';
import {environment} from "../environments/environment";
import {NgForm} from "@angular/forms";
import {AuthService} from "./auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {
  title: string = 'Chimera Project'
  displayMessage: string | null = null

  isRegister = false
  navigationTimer:any

  constructor(private authService:AuthService, private router:Router) { }

  ngOnInit(): void {
    this.title = environment.title
  }

  onSubmitForm(loginForm: NgForm) {
    if(!loginForm.valid) return;

    if(this.isRegister) {
      this.handleRegister(loginForm)
    } else {
      this.handleLogin(loginForm)
    }

    loginForm.reset()
  }

  handleLogin(loginForm: NgForm) {
    this.authService.login(loginForm.value.email, loginForm.value.password)
      .subscribe({
        next: _ => {
          this.router.navigate(['/home']).then()
        },
        error: err => this.displayMessage = err
      })
  }
  handleRegister(registerForm: NgForm) {
    this.authService.signUp(registerForm.value.email, registerForm.value.password)
      .subscribe({
        next: _ => {
          this.displayMessage = '✔️ Successfully registered.'
          this.navigationTimer = setTimeout( () => {
            this.router.navigate(['/home']).then(() => this.navigationTimer.unsubscribe)
          },1500)
        },
        error: err => this.displayMessage = err
      })
  }

  onMessagePopupHandle() {
    this.displayMessage = null
  }

  onRegisterClicked() {
    this.isRegister = true
  }
}
