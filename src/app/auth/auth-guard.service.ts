import {ActivatedRouteSnapshot, CanActivateChildFn, CanActivateFn, Router, RouterStateSnapshot} from "@angular/router";
import {AuthService} from "./auth.service";
import {inject} from "@angular/core";
import {map, take} from "rxjs";

export const canActivate: CanActivateFn = (
  route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot
) => {
  const authService = inject(AuthService)
  const router = inject(Router)

  return authService.userSet.pipe(
    take(1),
    map( user => {
      return user ? true : router.createUrlTree(['/auth'])
    })
  )
}

export const canActivateChild: CanActivateChildFn = (
  route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot) => canActivate(route, state);
