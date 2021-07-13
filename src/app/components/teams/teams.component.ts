import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-teams',
  templateUrl: './teams.component.html',
  styleUrls: ['./teams.component.scss'],
})
export class TeamsComponent implements OnInit {
  constructor() {}

  cardData: any = [
    {
      teamShortName: 'RCB',
      teamFullName: 'Royal Challengers Bangalore',
      playerNo: 12,
      imageUr1: 'assets/team-logo.png',
    },
    {
      teamShortName: 'RCB',
      teamFullName: 'Royal Challengers Bangalore',
      playerNo: 12,
      imageUr1: 'assets/team-logo.png',
    },
    {
      teamShortName: 'RCB',
      teamFullName: 'Royal Challengers Bangalore',
      playerNo: 12,
      imageUr1: 'assets/team-logo.png',
    },
    {
      teamShortName: 'RCB',
      teamFullName: 'Royal Challengers Bangalore',
      playerNo: 12,
      imageUr1: 'assets/team-logo.png',
    },
    {
      teamShortName: 'RCB',
      teamFullName: 'Royal Challengers Bangalore',
      playerNo: 12,
      imageUr1: 'assets/team-logo.png',
    },
    {
      teamShortName: 'RCB',
      teamFullName: 'Royal Challengers Bangalore',
      playerNo: 12,
      imageUr1: 'assets/team-logo.png',
    },
    {
      teamShortName: 'RCB',
      teamFullName: 'Royal Challengers Bangalore',
      playerNo: 12,
      imageUr1: 'assets/team-logo.png',
    },
    {
      teamShortName: 'RCB',
      teamFullName: 'Royal Challengers Bangalore',
      playerNo: 12,
      imageUr1: 'assets/team-logo.png',
    },
    {
      teamShortName: 'RCB',
      teamFullName: 'Royal Challengers Bangalore',
      playerNo: 12,
      imageUr1: 'assets/team-logo.png',
    },
    {
      teamShortName: 'RCB',
      teamFullName: 'Royal Challengers Bangalore',
      playerNo: 12,
      imageUr1: 'assets/team-logo.png',
    },
    {
      teamShortName: 'RCB',
      teamFullName: 'Royal Challengers Bangalore',
      playerNo: 12,
      imageUr1: 'assets/team-logo.png',
    },
  ];

  popup: boolean = false;

  ngOnInit(): void {}

  onclick(): void {
    this.popup = !this.popup;
  }
}
