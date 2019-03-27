import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

import { CrudListItem } from './CrudListItem';

@Component({
  selector: 'ngx-crud-list',
  templateUrl: 'ngx-crud-list.component.html',
  styleUrls: ['ngx-crud-list.component.scss']
})

export class NgxCrudListComponent implements OnInit {

  @Input() items: CrudListItem[] = [];
  @Input() placeholder: string;

  previousName: string;

  currentItem: CrudListItem = new CrudListItem('');

  form: FormGroup;

  oldKey: string;

  constructor() { }

  ngOnInit() {
    this.form = new FormGroup({
      'name': new FormControl(),
    });
  }

  add(item: CrudListItem) {
    this.items.push(item);

    this.currentItem = new CrudListItem('');
  }

  delete(index) {
    this.items.splice(index, 1);
  }

  edit(index): void {
    this.previousName = this.items[index].Name;
    this.items[index].IsEditable = true;
  }

  save(index): void {
    this.items[index].IsEditable = false;
  }

  cancel(index) {
    this.items[index].Name = this.previousName;
    this.items[index].IsEditable = false;
  }

}
