import {Component, Input} from '@angular/core';
import {Update} from "../../model/update";
import {ActivatedRoute, Router} from "@angular/router";
import {UpdateService} from "../update.service";

@Component({
  selector: 'app-home-item',
  templateUrl: './home-item.component.html',
  styleUrls: ['./home-item.component.css']
})
export class HomeItemComponent {
  @Input('updateCard') update!: Update
  @Input('itemId') id!:number

  constructor(
    private updateService:UpdateService,
    private router:Router,
    private route:ActivatedRoute) { }

  onUpdateSelected() {
    this.router.navigate([this.id], {
        queryParams: {edit: 1},
        relativeTo: this.route
      }
    ).then()
  }

  onUpdateDelete() {
    this.updateService.deleteUpdate(this.id)
  }
}
