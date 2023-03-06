import { Component } from '@angular/core';
import {Member} from "../model/member";

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {
  team: Member[] = [
    new Member('Patsore',
      'https://avatars.githubusercontent.com/u/80210497?v=4',
      'Project Lead',
      'https://github.com/patsore'),
    new Member('Shrecknt',
      'https://avatars.githubusercontent.com/u/58538423?v=4',
      'Developer',
      'https://github.com/Shrecknt'),
    new Member('JamSharp',
      'https://avatars.githubusercontent.com/u/79325704?v=4',
      'Developer',
      'https://github.com/jms-c')
    // new Member('Bluefox',
    //   'https://avatars.githubusercontent.com/u/58538423?v=4',
    //   'Developer',
    //   'https://github.com/Shrecknt')
  ]
}
