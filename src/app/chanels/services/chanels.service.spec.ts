import { TestBed } from '@angular/core/testing';

import { ChanelsService } from './chanels.service';

describe('ChanelsService', () => {
  let service: ChanelsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ChanelsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
