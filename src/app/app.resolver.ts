import {ActivatedRouteSnapshot, ResolveFn, Router, RouterStateSnapshot} from '@angular/router';
import {Update} from "./model/update";
import {inject} from "@angular/core";
import {UpdateService} from "./home/update.service";
import {DataStorageService} from "./data-storage.service";
import {catchError, throwError} from "rxjs";
import {FaqAnswer} from "./model/faq-answer";
import {FaqService} from "./faq/faq.service";

export const updateResolver: ResolveFn<Update[]> =
  (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) => {
    const updateService = inject(UpdateService)
    const storageService = inject(DataStorageService)
    const router = inject(Router)

    const updates = updateService.getUpdates()
    return updates.length === 0 ?
      storageService.fetchUpdates().pipe(
       catchError(err => {
         router.navigate(['/error'],
           {queryParams:{ message:err }}
         ).then()
         return throwError(() => err)
       })
      ): updates
  }

export const faqAnswerResolver: ResolveFn<FaqAnswer[]> =
  (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) => {
    const faqService = inject(FaqService)
    const storageService = inject(DataStorageService)
    const router = inject(Router)

    const answers = faqService.getAnswers()
    return answers.length === 0 ?
      storageService.fetchAnswers().pipe(
        catchError(err => {
          router.navigate(['/error'],
            {queryParams:{ message:err }}
          ).then()
          return throwError(() => err)
        })
      ): answers
  }
