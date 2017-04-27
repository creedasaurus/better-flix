import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-menu-bar',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})

export class MenuBarComponent {
  @Output() onViewChange = new EventEmitter<boolean>();

  viewChange(cardsView: boolean) {
    this.onViewChange.emit(cardsView);
  }
}
