import { UpdateEvent } from './../item-list/item-list.component';
import { BudgetItem } from './../../shared/models/budget-item.model';
import { Component, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss'],
})
export class MainPageComponent implements OnInit {
  budgetItems: BudgetItem[] = new Array<BudgetItem>();
  // locBudgetItems: BudgetItem[] = new Array<BudgetItem>();
  tottalBudget = 0;
  constructor() {}

  ngOnInit(): void {
    this.getBudgetItems();
  }
  addItem(newItem: BudgetItem): void {
    this.budgetItems.push(newItem);
    this.tottalBudget += newItem.amount;

    // Set Local DB
    localStorage.setItem('budgetItems', JSON.stringify(this.budgetItems));
    localStorage.setItem('tottalBudget', JSON.stringify(this.tottalBudget));
  }

  deleteItem(item: BudgetItem): void {
    const index = this.budgetItems.indexOf(item);
    this.budgetItems.splice(index, 1);
    this.tottalBudget -= item.amount;

    // Set Local DB
    localStorage.setItem('budgetItems', JSON.stringify(this.budgetItems));
    localStorage.setItem('tottalBudget', JSON.stringify(this.tottalBudget));
  }

  updateItem(updateEvent: UpdateEvent): void {
    // edit the selected item
    this.budgetItems[this.budgetItems.indexOf(updateEvent.old)] =
      updateEvent.new;
    // budget Update
    const total = updateEvent.new.amount - updateEvent.old.amount;
    this.tottalBudget += total;

    // Set Local DB
    localStorage.setItem('budgetItems', JSON.stringify(this.budgetItems));
    localStorage.setItem('tottalBudget', JSON.stringify(this.tottalBudget));
  }

  getBudgetItems(): void {
    if (localStorage.getItem('budgetItems') === null) {
      this.budgetItems = new Array<BudgetItem>();
      this.tottalBudget = 0;
    } else {
      this.budgetItems = JSON.parse(localStorage.getItem('budgetItems'));
      this.tottalBudget = JSON.parse(localStorage.getItem('tottalBudget'));
    }
    // return this.budgetItems;
  }
}
