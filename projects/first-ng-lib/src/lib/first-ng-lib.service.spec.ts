import { TestBed } from '@angular/core/testing';

import { FirstNgLibService } from './first-ng-lib.service';

describe('FirstNgLibService', () => {
  let service: FirstNgLibService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FirstNgLibService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
