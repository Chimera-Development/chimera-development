import {Component, OnInit} from '@angular/core';
import {environment} from "../environments/environment";
import {Update} from "../model/update";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  title!: string

  updates: Update[] = [
    new Update(
      'Lorem Ipsum',
      new Date(Date.now()),
      'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.',
      'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/735bd8c7-138c-49b5-901f-7b8d55015ae3/d69qm7h-02ed8a9e-8259-43c1-94f3-92fb633088b8.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzczNWJkOGM3LTEzOGMtNDliNS05MDFmLTdiOGQ1NTAxNWFlM1wvZDY5cW03aC0wMmVkOGE5ZS04MjU5LTQzYzEtOTRmMy05MmZiNjMzMDg4YjgucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.pIc40sPukAAkWbmaPO3h2rEmVjmYd2yv9IPLIlFvrvI'
    ),
    new Update(
      'Neque porro quisquam',
      new Date(Date.now()),
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc eget mi ac enim mollis consectetur vel in dui. Nullam non quam fermentum, dignissim tellus non, accumsan neque.',
      'https://wallpaperaccess.com/full/4003568.png'),
    new Update(
      'Neque porro quisquam',
      new Date(Date.now()),
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc eget mi ac enim mollis consectetur vel in dui. Nullam non quam fermentum, dignissim tellus non, accumsan neque.',
      'https://wallpaperaccess.com/full/4003568.png')
  ]

  ngOnInit(): void {
    this.title = environment.title
  }
}
