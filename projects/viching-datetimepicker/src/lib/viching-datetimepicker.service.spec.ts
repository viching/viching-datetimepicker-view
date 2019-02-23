import { TestBed } from '@angular/core/testing';

import { VichingDatetimepickerService } from './viching-datetimepicker.service';

describe('VichingDatetimepickerService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: VichingDatetimepickerService = TestBed.get(VichingDatetimepickerService);
    expect(service).toBeTruthy();
  });
});
