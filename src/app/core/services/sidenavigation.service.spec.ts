import { TestBed } from '@angular/core/testing';

import { SidenavigationService } from './sidenavigation.service';

describe('SidenavigationService', () => {
  let service: SidenavigationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SidenavigationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
