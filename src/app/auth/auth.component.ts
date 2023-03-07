import {Component, OnInit} from '@angular/core';
import {environment} from "../environments/environment";
import {NgForm} from "@angular/forms";
import {AuthService} from "./auth.service";

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {
  title: string = 'Chimera Project'

  constructor(private authService:AuthService) { }

  ngOnInit(): void {
    this.title = environment.title
  }

  onSubmitForm(loginForm: NgForm) {
   this.authService.login(loginForm.value.email, loginForm.value.password)
  }
}
