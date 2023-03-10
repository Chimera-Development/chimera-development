import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpResponse} from "@angular/common/http";
import {BehaviorSubject, catchError, Observable, Subject, tap, throwError} from "rxjs";
import {environment} from "../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  userSet = new BehaviorSubject<User | null>(null)

  constructor(private client:HttpClient) { }

  login(email:string, password:string): Observable<AuthResponse> {
    return this.client.post<AuthResponse>('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=' + environment.FIREBASE_API_KEY,
      {
        email,
        password,
        returnSecureToken: true
      }).pipe(
        catchError(this.handleErrorResponse),
        tap({
          next: response =>
            this.handleLogin(response.email, response.localId, response.idToken, +response.expiresIn)
        })
    )
  }


  private handleLogin(email:string, userId:string,token:string, expiresIn:number) {
    const expiry = new Date(new Date().getTime() + (expiresIn * 1000) )
    let currentUser = new User(email,userId,token,expiry);

    this.userSet.next(currentUser)
    localStorage.setItem('userData', JSON.stringify(currentUser))
  }

  private handleErrorResponse(response:HttpErrorResponse):Observable<AuthResponse> {
    let message = 'An error occurred.'
    console.log(response.error)

    if(!(response.error || response.error.error)) return throwError( () => message)

    if(response.error.error.message === ('INVALID_PASSWORD')
      || response.error.error.message === ('EMAIL_NOT_FOUND')) {
      message = 'The entered Email or Password is incorrect.'
    }
    return throwError(() => message)
  }
}


interface AuthResponse {
  idToken:string,
  email:string,
  refreshToken:string,
  expiresIn:string,
  localId:string
}

export class User {
  constructor(
    public email:string,
    public userId:string,
    public token:string,
    public expiry:Date
  ) { }
}
