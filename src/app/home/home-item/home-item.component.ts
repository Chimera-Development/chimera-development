import {Component, Input} from '@angular/core';
import {Update} from "../../model/update";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-home-item',
  templateUrl: './home-item.component.html',
  styleUrls: ['./home-item.component.css']
})
export class HomeItemComponent {
  @Input('updateCard') update!: Update
  @Input('itemId') id!:number

  constructor(private router:Router, private route:ActivatedRoute) { }

  onElementSelected() {
    this.router.navigate([this.id + '/edit'], { relativeTo: this.route}).then()
  }

  onElementDelete() {
    console.log('Delete Element' + this.id)
  }
}
