import { TestBed } from '@angular/core/testing';

import { FuelResolverService } from './fuel-resolver.service';

describe('FuelResolverService', () => {
  let service: FuelResolverService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FuelResolverService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
