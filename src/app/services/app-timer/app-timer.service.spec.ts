import { TestBed } from '@angular/core/testing';

import { AppTimerService } from './app-timer.service';

describe('AppTimerService', () => {
  let service: AppTimerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AppTimerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
