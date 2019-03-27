# ngx-crud-list

Crud List component for angular 7+.

## Usage

```
npm install --save ngx-crud-list
```

### Import
```
import { NgxCrudListModule } from 'ngx-crud-list';

// In your App's module:
imports: [
   NgxCrudListModule
]
```

### Add in your HTML

```
<ngx-crud-list [items]="inputItems" [placeholder]="'sample placeholder'"></ngx-crud-list>
```

### Define array in component

```
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
```

## Developing


### Change code in projects/ngx-crud-list/src folder

### Build library

```
npm run build:lib
```

### Run demo

```
ng serve
```

### TODO

1. Publish to npm
2. Provide events to parent (add/edit/delete)
3. Add hook for validation
4. ..


