import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpenselinesEditComponent } from './expenselines-edit.component';

describe('ExpenselinesEditComponent', () => {
  let component: ExpenselinesEditComponent;
  let fixture: ComponentFixture<ExpenselinesEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExpenselinesEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExpenselinesEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
