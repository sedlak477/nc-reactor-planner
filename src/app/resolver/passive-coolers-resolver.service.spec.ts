import { TestBed } from '@angular/core/testing';

import { PassiveCoolersResolverService } from './passive-coolers-resolver.service';

describe('PassiveCoolersResolverService', () => {
  let service: PassiveCoolersResolverService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PassiveCoolersResolverService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
