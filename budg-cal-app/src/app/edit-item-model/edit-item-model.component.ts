import { BudgetItem } from './../../shared/models/budget-item.model';
import { Component, OnInit, Input, Inject } from '@angular/core';
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from '@angular/material/dialog';
@Component({
  selector: 'app-edit-item-model',
  templateUrl: './edit-item-model.component.html',
  styleUrls: ['./edit-item-model.component.scss'],
})
export class EditItemModelComponent implements OnInit {
  // @Input() item: BudgetItem; we dont need it anymore
  constructor(
    public dialogRef: MatDialogRef<EditItemModelComponent>,
    @Inject(MAT_DIALOG_DATA) public item: BudgetItem
  ) {}

  ngOnInit(): void {}

  onSubmited(updatedItem: BudgetItem): void {
    this.dialogRef.close(updatedItem);
  }
}
