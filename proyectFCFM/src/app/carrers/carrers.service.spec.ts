import { TestBed } from '@angular/core/testing';

import { CarrersService } from './carrers.service';

describe('CarrersService', () => {
  let service: CarrersService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CarrersService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
