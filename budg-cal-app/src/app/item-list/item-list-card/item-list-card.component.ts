import { BudgetItem } from './../../../shared/models/budget-item.model';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-item-list-card',
  templateUrl: './item-list-card.component.html',
  styleUrls: ['./item-list-card.component.scss'],
})
export class ItemListCardComponent implements OnInit {
  @Input() item: BudgetItem;
  @Output() xButtonClicked: EventEmitter<void> = new EventEmitter<void>();
  @Output() cardClick: EventEmitter<any> = new EventEmitter<any>();
  constructor() {}

  ngOnInit(): void {}
  onXButtonClick(): void {
    this.xButtonClicked.emit();
  }
  onCardClick(): any {
    this.cardClick.emit();
  }
}
