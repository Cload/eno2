import { Component, OnInit } from '@angular/core';
import { IMachineScheduleInfo } from '../models/IMachineScheduleInfo';
import { Linea } from '../../types/Linea'
import { TipoAttivita} from '../../types/TipoAttivita'
import { IMachineScheduleService } from '../services/imachine-schedule/imachine-schedule.service';
import { filterUnique } from '../../Utils/ArrayUtils'
import { tipiAttivita } from '../../Utils/LineeUtils'

@Component({
  selector: 'machine-schedule',
  templateUrl: './machine-schedule.component.html',
  styleUrls: ['./machine-schedule.component.scss']
})
export class MachineScheduleComponent implements OnInit {

  constructor(private scheduleService: IMachineScheduleService) { }
  private machineInfo : IMachineScheduleInfo[];
  public isLoading : boolean = true;
  public currentDate : Date = new Date(2020, 6, 14, 0, 0, 0);

  public get linee() : Linea[] {
    if (!this.machineInfo){
      return undefined;
    }
    var linee = this.machineInfo.map(i => i.linea)
    linee = linee.filter(filterUnique);
    return linee.map(l => ({ id: l, text: l }));
  }

  public get tipiAttivita() : TipoAttivita[] {
    return tipiAttivita;
  }

  ngOnInit(): void {
    this.scheduleService.getSchedule().subscribe(
      (res) => {
        this.isLoading = false;
        this.machineInfo = res;
        console.log(this.machineInfo)
      }
    );
  }

}


