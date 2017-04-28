import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-menu-bar',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})

export class MenuBarComponent {
  @Output() onViewChange = new EventEmitter<boolean>();
  @Output() onFilterChange = new EventEmitter<Object>();
  @Output() onOrderChange = new EventEmitter<string>();
  filterOptions: string[];

  selectedFilter: string;
  selectedSpecFilter: string;
  selectedOrder: string;

  filters = {
    'Rated': ['G', 'PG', 'PG-13', 'R', 'NR', 'TV-MA', 'TV-PG', 'TV-14'],
    'Genre': [
        'Action',
        'Adventure',
        'Animation',
        'Biography',
        'Comedy',
        'Crime',
        'Documentary',
        'Drama',
        'Family',
        'Fantasy',
        'Film-Noir',
        'History',
        'Horror',
        'Music',
        'Musical',
        'Mystery',
        'Romance',
        'Sci-Fi',
        'Sport',
        'Thriller',
        'War',
        'Western'
      ],
    'Type': ['movie', 'series']
  };

  orders = [
    'Score',
    'Title',
    'Released',
    'Genre'
  ];

  changeFilter() {
    this.onFilterChange.emit({
      'filter': this.selectedFilter,
      'specFilt': this.selectedSpecFilter
    });
  }

  viewChange(cardsView: boolean) {
    this.onViewChange.emit(cardsView);
  }

  constructor() {
    this.filterOptions = Object.keys(this.filters);
  }
}
