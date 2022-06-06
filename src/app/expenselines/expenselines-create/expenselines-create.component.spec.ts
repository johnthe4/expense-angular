import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpenselinesCreateComponent } from './expenselines-create.component';

describe('ExpenselinesCreateComponent', () => {
  let component: ExpenselinesCreateComponent;
  let fixture: ComponentFixture<ExpenselinesCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExpenselinesCreateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExpenselinesCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
