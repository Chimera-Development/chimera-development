import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {environment} from "../environments/environment";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit{
  title!: string
  ngOnInit(): void {
    this.title = environment.title
  }

  constructor(private router: Router) { }

  onLoginClicked() {
    this.router.navigate(['/auth']).then()
  }
}
