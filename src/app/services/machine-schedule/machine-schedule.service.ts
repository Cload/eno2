import { Injectable } from '@angular/core';
import { IMachineScheduleService } from '../imachine-schedule/imachine-schedule.service';
import { Observable } from 'rxjs';
import { IMachineScheduleInfo } from 'src/app/models/IMachineScheduleInfo';

@Injectable({
  providedIn: 'root'
})
export class MachineScheduleService extends IMachineScheduleService {
  
  getSchedule(): Observable<Array<IMachineScheduleInfo>> {
    throw new Error("Method not implemented.");
  }

  constructor() {
    super()
   }
}
