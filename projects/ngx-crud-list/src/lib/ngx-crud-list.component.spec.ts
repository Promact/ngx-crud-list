import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxCrudListComponent } from './ngx-crud-list.component';

describe('NgxCrudListComponent', () => {
  let component: NgxCrudListComponent;
  let fixture: ComponentFixture<NgxCrudListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgxCrudListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxCrudListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
