import {Component, OnInit} from '@angular/core';
import {Member} from "../model/member";
import {Router} from "@angular/router";
import {TeamService} from "./team.service";

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  team!: Member[]


  constructor(private teamService: TeamService) { }

  ngOnInit(): void {
    this.team = this.teamService.getTeamMembers()
  }

  onClickDiscord() {
    window.open('https://discord.com/')
  }
  onClickGithub() {
    window.open('https://github.com/Chimera-Development')
  }
}
