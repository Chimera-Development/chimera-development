import { Injectable } from '@angular/core';
import {Member} from "../model/member";

@Injectable({
  providedIn: 'root'
})
export class TeamService {
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
      'https://jamsharp.net/assets/CircleBranding.png',
      'Developer',
      'https://github.com/jms-c')
  ]

  getTeamMembers():Member[] {
    return this.team.slice()
  }
}
