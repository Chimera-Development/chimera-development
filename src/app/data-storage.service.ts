import {Injectable} from '@angular/core';
import {HttpClient, HttpErrorResponse} from "@angular/common/http";
import {UpdateService} from "./home/update.service";
import {catchError, map, Observable, tap, throwError} from "rxjs";
import {Update, UpdateResponse} from "./model/update";
import {FaqAnswer, FaqAnswerResponse} from "./model/faq-answer";
import {FaqService} from "./faq/faq.service";

@Injectable({
  providedIn: 'root'
})
export class DataStorageService {
  constructor(
    private client: HttpClient,
    private updateService: UpdateService,
    private faqService: FaqService) { }

  /**
   * For fetching Updates from Firebase updates-Endpoint
   * UpdateResponse[] -> Update[] (null fields -> '') || Errormessage
   * mapped Update[] set in UpdateService -> output to Component via Subject
   */
  fetchUpdates(): Observable<Update[]> {
    return this.client.get<UpdateResponse[]>(
      'https://chimera-client-default-rtdb.europe-west1.firebasedatabase.app/updates.json'
    ).pipe(
      map((update) => {
        return <Update[]>update.map(
          (update) => {
            return {
              ...update,
              quote: update.quote ? update.quote : '',
              developer: update.developer ? update.developer : ''
            }
          })
      }),
      tap(updates => this.updateService.setUpdates(updates)),
      catchError(this.handleLoadingErrorResponse<Update[]>)
    )
  }

  saveUpdates(): Observable<UpdateResponse[]> {
    const updates = this.updateService.getUpdates()

    return this.client.put<UpdateResponse[]>(
      'https://chimera-client-default-rtdb.europe-west1.firebasedatabase.app/updates.json',
      updates
    ).pipe(
      catchError(this.handleSavingErrorResponse<UpdateResponse[]>)
    )
  }

  /**
   * For fetching FaqAnswers from Firebase faq-Endpoint
   * FaqAnswerResponse[] -> FaqAnswer[] (null -> '') || Errormessage
   * mapped FaqAnswer[] set in FaqService -> output to Component via Subject
   */
  fetchAnswers() {
    return this.client.get<FaqAnswerResponse[]>(
      'https://chimera-client-default-rtdb.europe-west1.firebasedatabase.app/faq.json'
    ).pipe(
      map((answer) => {
        return <FaqAnswer[]>answer.map(
          (answer) => {
            return {
              ...answer,
              linkDisplay: answer.linkDisplay ? answer.linkDisplay : '',
              link: answer.link ? answer.link : ''
            }
          })
      }),
      tap(answers => this.faqService.setAnswers(answers)),
      catchError(this.handleLoadingErrorResponse<FaqAnswer[]>)
    )
  }

  saveAnswers(): Observable<FaqAnswerResponse[]> {
    const answers = this.faqService.getAnswers()

    return this.client.put<FaqAnswerResponse[]>(
      'https://chimera-client-default-rtdb.europe-west1.firebasedatabase.app/faq.json',
      answers
    ).pipe(
      catchError(this.handleSavingErrorResponse<FaqAnswerResponse[]>)
    )
  }

  private handleSavingErrorResponse<T>(response:HttpErrorResponse):Observable<T> {
    let message = 'Failed to complete the request.'

    if(response.status != null) {
      message = '⚠️ ' + response.status + ': ' + response.statusText
    }

    return throwError(() => message)
  }

  private handleLoadingErrorResponse<T>(response:HttpErrorResponse):Observable<T> {
    let message = 'Failed to retrieve response data.'

    if(response.status != null) {
      message = '⚠️ ' + response.status + ': ' + response.statusText
        + ' Unable to retrieve data.'
    }

    return throwError(() => message)
  }
}


