import { TestBed } from '@angular/core/testing';

import { FloorManagerService } from './floor-manager.service';

describe('FloorManagerService', () => {
  let service: FloorManagerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FloorManagerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
