import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpenselineListComponent } from './expenseline-list.component';

describe('ExpenselineListComponent', () => {
  let component: ExpenselineListComponent;
  let fixture: ComponentFixture<ExpenselineListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExpenselineListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExpenselineListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
