import {Observable} from "rxjs";
import {CanDeactivateFn, UrlTree} from "@angular/router";

export interface CanComponentDeactivate {
  canDeactivate: () => boolean | Observable<boolean>
}

export const canDeactivateFormGuard: CanDeactivateFn<CanComponentDeactivate> = (
  component:CanComponentDeactivate
):Observable<boolean | UrlTree> => {
  return new Observable<boolean | UrlTree>((subscriber) => {
    return component.canDeactivate() ?
      subscriber.next(true) :
      subscriber.next(confirm('Any unsaved changes will be lost. Do you want to proceed?'))
    }
  )
}

export const canDeactivateDataGuard: CanDeactivateFn<CanComponentDeactivate> = (
  component:CanComponentDeactivate
):Observable<boolean | UrlTree> => {
  return new Observable<boolean | UrlTree>((subscriber) => {
    return component.canDeactivate() ?
      subscriber.next(true) :
      subscriber.next(false)
    }
  )
}
