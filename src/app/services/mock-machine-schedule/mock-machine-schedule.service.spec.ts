import { TestBed } from '@angular/core/testing';

import { MockMachineScheduleService } from './mock-machine-schedule.service';

describe('MockMachineScheduleService', () => {
  let service: MockMachineScheduleService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MockMachineScheduleService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
