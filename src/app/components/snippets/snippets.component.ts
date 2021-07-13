import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-snippets',
  templateUrl: './snippets.component.html',
  styleUrls: ['./snippets.component.scss'],
})
export class SnippetsComponent implements OnInit {
  constructor() {}

  snippetsData: any = [
    {
      imageUrl: 'assets/events.svg',
      name: 'Events',
    },
    {
      imageUrl: 'assets/teams.svg',
      name: 'Teams',
    },
    {
      imageUrl: 'assets/merchandise.svg',
      name: 'Merchandises',
    },
    {
      imageUrl: 'assets/commentator.svg',
      name: 'commentator',
    },
    {
      imageUrl: 'assets/sponsors.svg',
      name: 'sponsor',
    },
  ];

  ngOnInit(): void {}
}
