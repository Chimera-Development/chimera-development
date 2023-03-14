import { Injectable } from '@angular/core';
import {Update} from "../model/update";
import {Subject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class UpdateService {
  itemsUpdated = new Subject<Update[]>()

  updates: Update[] = []

  getUpdates(): Update[] {
    return this.updates.slice()
  }

  getUpdate(componentId: number) {
    return this.getUpdates()[componentId]
  }

  updateUpdate(id: number, update: Update) {
    this.updates[id] = update

    this.itemsUpdated.next(this.updates.slice())
  }

  createUpdate(update: Update) {
    this.updates.push(update)

    this.itemsUpdated.next(this.updates.slice())
  }

  deleteUpdate(id: number) {
    this.updates.splice(id, 1)

    console.log(this.updates.slice())

    this.itemsUpdated.next(this.updates.slice())
  }

  setUpdates(updates: Update[]) {
    this.updates = updates
    this.itemsUpdated.next(this.updates.slice())
  }
}
