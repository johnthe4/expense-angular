import { TestBed } from '@angular/core/testing';

import { ExpenselinesService } from './expenselines.service';

describe('ExpenselinesService', () => {
  let service: ExpenselinesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ExpenselinesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
