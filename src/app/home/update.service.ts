import { Injectable } from '@angular/core';
import {Update} from "../model/update";

@Injectable({
  providedIn: 'root'
})
export class UpdateService {
  updates: Update[] = [
    new Update(
      'Migrated to the new Event System',
      new Date(2023,2,5),
      'Event System has been reworked and a dependency-based Event System has been implemented.',
      'https://wallpaperaccess.com/full/4003568.png',
      'https://github.com/Chimera-Development/chimera-client/commit/80f0eda3b35f559a1df26ccd1d1cb4dd87773733'),
    new Update(
      'Implemented Kill Aura',
      new Date(2023,2,4),
      'The Kill Aura Module allows you to hit targets that aren\'t directly in front of your cross-hair.',
      'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/735bd8c7-138c-49b5-901f-7b8d55015ae3/d69qm7h-02ed8a9e-8259-43c1-94f3-92fb633088b8.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzczNWJkOGM3LTEzOGMtNDliNS05MDFmLTdiOGQ1NTAxNWFlM1wvZDY5cW03aC0wMmVkOGE5ZS04MjU5LTQzYzEtOTRmMy05MmZiNjMzMDg4YjgucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.pIc40sPukAAkWbmaPO3h2rEmVjmYd2yv9IPLIlFvrvI',
      'https://github.com/Chimera-Development/chimera-client/commit/d3c945325fb5620c96e73e4de1c806bbe797cc0b',
      'Killaura is the best module, it lets you murder anyone with 1 single press of a key!',
      'JamSharp (GUI Builder)'
    )
]

  getUpdates(): Update[] {
    return this.updates.slice()
  }
}
