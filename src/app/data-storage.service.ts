import {Injectable} from '@angular/core';
import {HttpClient, HttpErrorResponse} from "@angular/common/http";
import {UpdateService} from "./home/update.service";
import {catchError, map, Observable, throwError} from "rxjs";
import {Update, UpdateResponse} from "./model/update";

@Injectable({
  providedIn: 'root'
})
export class DataStorageService {
  constructor(
    private client: HttpClient,
    private updateService: UpdateService) { }

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
      catchError(this.handleLoadingErrorResponse)
    )
  }

  saveUpdates(): Observable<UpdateResponse[]> {
    const updates = this.updateService.getUpdates()

    return this.client.put<UpdateResponse[]>(
      'https://chimera-client-default-rtdb.europe-west1.firebasedatabase.app/updates.json',
      updates
    ).pipe(
      catchError(this.handleSavingErrorResponse)
    )
  }

  private handleSavingErrorResponse(response:HttpErrorResponse):Observable<UpdateResponse[]> {
    let message = 'Failed to complete the request.'

    if(response.status != null) {
      message = '⚠️ ' + response.status + ': ' + response.statusText
    }

    return throwError(() => message)
  }

  private handleLoadingErrorResponse(response:HttpErrorResponse):Observable<Update[]> {
    let message = 'Failed to retrieve response data.'

    if(response.status != null) {
      message = '⚠️ ' + response.status + ': ' + response.statusText
        + 'Unable to retrieve data.'
    }

    return throwError(() => message)
  }
}


