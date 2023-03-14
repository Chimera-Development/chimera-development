import {ActivatedRouteSnapshot, ResolveFn, RouterStateSnapshot} from '@angular/router';
import {Update} from "./model/update";
import {inject} from "@angular/core";
import {UpdateService} from "./home/update.service";
import {DataStorageService} from "./data-storage.service";

export const updateResolver: ResolveFn<Update[]> =
  (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) => {
    const updateService = inject(UpdateService)
    const storageService = inject(DataStorageService)

    const updates = updateService.getUpdates()
    return updates.length === 0 ?
      storageService.fetchUpdates() : updates
  }
