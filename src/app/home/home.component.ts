import {Component, OnInit} from '@angular/core';
import {environment} from "../environments/environment";
import {Update} from "../model/update";
import {UpdateService} from "./update.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  title!: string

  updates!: Update[]

  constructor(private updateService: UpdateService) { }

  ngOnInit(): void {
    this.title = environment.title
    this.updates = this.updateService.getUpdates()
  }
}
