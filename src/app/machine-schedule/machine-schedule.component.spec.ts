import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MachineScheduleComponent } from './machine-schedule.component';

describe('MachineScheduleComponent', () => {
  let component: MachineScheduleComponent;
  let fixture: ComponentFixture<MachineScheduleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MachineScheduleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MachineScheduleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
