import { Injectable } from '@angular/core';
import { IMachineScheduleService } from '../imachine-schedule/imachine-schedule.service';
import { Observable, from } from 'rxjs';
import { HttpClient } from '@angular/common/http'
import { IMachineScheduleInfo } from 'src/app/models/IMachineScheduleInfo';

import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MachineScheduleService extends IMachineScheduleService {
  
  getSchedule(): Observable<Array<IMachineScheduleInfo>> {
    var data = this.http.get<Array<IMachineScheduleInfo>>("https://app.anemone.it/monitorcalendar/api/events")
    return data;
  }

  constructor(private http : HttpClient) {
    super()
   }
}
