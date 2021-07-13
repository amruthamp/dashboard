import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-features',
  templateUrl: './features.component.html',
  styleUrls: ['./features.component.scss'],
})
export class FeaturesComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  infoData: any = [
    {
      label: 'Start date',
      value: '23 Nov, 2020',
    },
    {
      label: 'Duration',
      value: '6 Months',
    },
    {
      label: 'Country',
      value: 'India',
    },
    {
      label: 'Teams',
      value: '8 Teams',
    },
    {
      label: 'Players',
      value: '160 Players',
    },
    {
      label: 'Total Events',
      value: '60 Events',
    },
    {
      label: 'Sponsors',
      value: '10 Sponsors',
    },
    {
      label: 'Commentators',
      value: '10 Commentators',
    },
    {
      label: 'Merchandises',
      value: '100 Merchandises',
    },
    {
      label: 'Polls',
      value: '10 Polls',
    },
    {
      label: 'Bets',
      value: '100 Polls',
    },
    {
      label: 'Total Veiws',
      value: '1.5 Millions Views',
    },
  ];
}
