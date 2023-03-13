import {Injectable} from '@angular/core';
import {HttpClient, HttpErrorResponse} from "@angular/common/http";
import {BehaviorSubject, catchError, Observable, tap, throwError} from "rxjs";
import {environment} from "../environments/environment";
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  userSet = new BehaviorSubject<User | null>(null)
  expirationTimer: any

  constructor(
    private client: HttpClient,
    private router: Router
  ) {
  }

  login(email: string, password: string): Observable<AuthResponse> {
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

  private handleLogin(email: string, userId: string, token: string, expiryTime: number) {
    const expiryDate = new Date(new Date().getTime() + (expiryTime * 1000))
    const currentUser = new User(
      email,
      userId,
      token,
      expiryDate
    )

    this.userSet.next(currentUser)
    localStorage.setItem('userData', JSON.stringify(currentUser))
    this.handleAutoLogout(expiryTime * 1000)
  }

  private handleErrorResponse(response: HttpErrorResponse): Observable<AuthResponse> {
    let message = 'An error occurred.'

    if (!(response.error || response.error.error)) return throwError(() => message)

    if (response.error.error.message === ('INVALID_PASSWORD')
      || response.error.error.message === ('EMAIL_NOT_FOUND')) {
      message = 'The entered Email or Password is incorrect.'
    }
    return throwError(() => message)
  }

  handleAutoLogin() {
    const userData:{
      email:string,
      userId:string,
      _token:string,
      _expiry: string
    } = JSON.parse(localStorage.getItem('userData')!);

    if (!userData) return

    const loadedUser = new User(
      userData.email,
      userData.userId,
      userData._token,
      new Date(userData._expiry)
    )

    if(loadedUser.token) {
      this.userSet.next(loadedUser)
      const expiryDuration = new Date(userData._expiry).getTime() - new Date().getTime()
      this.handleAutoLogout(expiryDuration)
    }
  }

  private handleAutoLogout(expiryDuration: number) {
    this.expirationTimer = setTimeout(() => {
      this.handleLogout()
    }, expiryDuration)
  }

  handleLogout() {
    this.userSet.next(null)
    this.router.navigate(['/auth']).then()
    localStorage.removeItem('userData')

    if (this.expirationTimer) clearTimeout(this.expirationTimer)
    this.expirationTimer = null
  }
}


interface AuthResponse {
  idToken: string,
  email: string,
  refreshToken: string,
  expiresIn: string,
  localId: string
}

class User {
  constructor(
    public email: string,
    public userId: string,
    public _token: string,
    public _expiry: Date
  ) {
  }

  get token():string | null {
    if(!this._expiry || new Date() > this._expiry) {
      return null
    }
    return this._token
  }
}
