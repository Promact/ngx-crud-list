import { Component } from '@angular/core';
import { CrudListItem } from 'ngx-crud-list';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  inputItems: CrudListItem[];

  constructor(){
    this.inputItems = new Array<CrudListItem>();

    this.inputItems.push(new CrudListItem("a"));
    this.inputItems.push(new CrudListItem("b"));
    this.inputItems.push(new CrudListItem("c"));
  }
}
