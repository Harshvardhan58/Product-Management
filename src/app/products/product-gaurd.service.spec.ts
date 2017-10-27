import { TestBed, inject } from '@angular/core/testing';

import { ProductGaurdService } from './product-gaurd.service';

describe('ProductGaurdService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ProductGaurdService]
    });
  });

  it('should be created', inject([ProductGaurdService], (service: ProductGaurdService) => {
    expect(service).toBeTruthy();
  }));
});
