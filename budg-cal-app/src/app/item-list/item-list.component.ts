import { EditItemModelComponent } from './../edit-item-model/edit-item-model.component';
import { MatDialog } from '@angular/material/dialog';
import { BudgetItem } from './../../shared/models/budget-item.model';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.scss'],
})
export class ItemListComponent implements OnInit {
  @Input() budgetItems: BudgetItem[];
  @Output() deleteEvent: EventEmitter<BudgetItem> = new EventEmitter<
    BudgetItem
  >();
  constructor(public dialog: MatDialog) {}

  ngOnInit(): void {}
  onDelete(item: BudgetItem): void {
    this.deleteEvent.emit(item);
  }
  onCardClicked(item: BudgetItem): void {
    const dialogRef = this.dialog.open(EditItemModelComponent, {
      width: '580px',
      data: item,
    });
    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        //edit the selected item
        this.budgetItems[this.budgetItems.indexOf(item)] = result;
      }
    });
  }
}
