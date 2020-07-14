import { TestBed } from '@angular/core/testing';

import { IMachineScheduleService } from './imachine-schedule.service';

describe('IMachineScheduleService', () => {
  let service: IMachineScheduleService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IMachineScheduleService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
