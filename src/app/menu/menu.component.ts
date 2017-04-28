import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-menu-bar',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})

export class MenuBarComponent {
  @Output() onViewChange = new EventEmitter<boolean>();
  selectedFilter: string = 'rating';
  selectedSpecFilter: string = 'PG';

  filterOptions: string[];
  filterSpecOps: string[];

  filters = {
    'rating': ['G', 'PG'],
    'review_score': [1,2,3,4,5],
    'category': ['anime', 'live-action'],
    'cost-type': ['paid', 'free']
  };


  viewChange(cardsView: boolean) {
    this.onViewChange.emit(cardsView);
  }

  constructor() {
    this.filterOptions = Object.keys(this.filters);
  }
}
