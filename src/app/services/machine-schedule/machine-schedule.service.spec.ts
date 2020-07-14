import { TestBed } from '@angular/core/testing';

import { MachineScheduleService } from './machine-schedule.service';

describe('MachineScheduleService', () => {
  let service: MachineScheduleService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MachineScheduleService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
