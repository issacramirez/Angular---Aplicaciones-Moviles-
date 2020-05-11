import { TestBed } from '@angular/core/testing';

import { CarrersService } from './carrers.service';

describe('CarrersService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CarrersService = TestBed.get(CarrersService);
    expect(service).toBeTruthy();
  });
});
