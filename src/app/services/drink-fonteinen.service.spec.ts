import { TestBed } from '@angular/core/testing';

import { DrinkFonteinenService } from './drink-fonteinen.service';

describe('DrinkFonteinenService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DrinkFonteinenService = TestBed.get(DrinkFonteinenService);
    expect(service).toBeTruthy();
  });
});
