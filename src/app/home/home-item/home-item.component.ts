import {Component, Input} from '@angular/core';
import {Update} from "../../model/update";

@Component({
  selector: 'app-home-item',
  templateUrl: './home-item.component.html',
  styleUrls: ['./home-item.component.css']
})
export class HomeItemComponent {
  @Input('updateCard') update!: Update
}
