import { BudgetItem } from './../../shared/models/budget-item.model';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent implements OnInit {
  @Input() item: BudgetItem;
  @Output() formSubmit: EventEmitter<BudgetItem> = new EventEmitter<
    BudgetItem
  >();

  isNewItem: boolean;
  constructor() {}

  ngOnInit(): void {
    if (this.item) {
      this.isNewItem = false;
    } else {
      this.isNewItem = true;
      this.item = new BudgetItem('', null);
    }
  }
  onSubmit(form: NgForm): void {
    this.formSubmit.emit(form.value);
    form.reset();
  }
}
