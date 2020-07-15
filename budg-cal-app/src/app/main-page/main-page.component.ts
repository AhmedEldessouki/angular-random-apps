import { UpdateEvent } from './../item-list/item-list.component';
import { BudgetItem } from './../../shared/models/budget-item.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss'],
})
export class MainPageComponent implements OnInit {
  budgetItems: BudgetItem[] = new Array<BudgetItem>();
  tottalBudget = 0;
  constructor() {}

  ngOnInit(): void {}
  addItem(newItem: BudgetItem): void {
    this.budgetItems.push(newItem);
    this.tottalBudget += newItem.amount;
  }

  deleteItem(item: BudgetItem): void {
    const index = this.budgetItems.indexOf(item);
    this.budgetItems.splice(index, 1);
    this.tottalBudget -= item.amount;
  }

  updateItem(updateEvent: UpdateEvent): void {
    // edit the selected item
    this.budgetItems[this.budgetItems.indexOf(updateEvent.old)] =
      updateEvent.new;
    // budget Update
    const total = updateEvent.new.amount - updateEvent.old.amount;
    this.tottalBudget += total;
  }
}
