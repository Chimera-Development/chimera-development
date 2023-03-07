import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable, tap} from "rxjs";
import {environment} from "../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private client:HttpClient) { }

  login(email:string, password:string) {
    this.client.post('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=' + environment.api_key,
      {
        email,
        password,
        returnSecureToken: true
      }).pipe(
        tap({ next: response => { console.log(response) } })
    ).subscribe()
  }
}

interface AuthResponse {
  idToken:string,
  email:string,
  refreshToken:string,
  expiresIn:string,
  localId:string
}
