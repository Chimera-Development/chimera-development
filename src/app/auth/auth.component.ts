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
  errorMessage: string | null = null

  constructor(private authService:AuthService, private router:Router) { }

  ngOnInit(): void {
    this.title = environment.title
  }

  onSubmitForm(loginForm: NgForm) {
    if(!loginForm.valid) return;

   this.authService.login(loginForm.value.email, loginForm.value.password)
     .subscribe({
       next: response => {
         console.log(response)
         this.router.navigate(['/home']).then()
       },
       error: err => this.errorMessage = err
     })

    loginForm.reset()
  }

  onErrorHandle() {
    this.errorMessage = null
  }
}
