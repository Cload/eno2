import { Component, OnInit } from '@angular/core';
import { IMachineScheduleInfo } from '../models/IMachineScheduleInfo';
import { Linea } from '../../types/Linea'
import { TipoAttivita} from '../../types/TipoAttivita'
import { IMachineScheduleService } from '../services/imachine-schedule/imachine-schedule.service';
import { filterUnique } from '../../Utils/ArrayUtils'
import { tipiAttivita } from '../../Utils/LineeUtils'
import { EventSettingsModel, GroupModel, TimelineViewsService, EventRenderedArgs} from '@syncfusion/ej2-angular-schedule';


@Component({
  selector: 'machine-schedule',
  templateUrl: './machine-schedule.component.html',
  styleUrls: ['./machine-schedule.component.scss'],
  providers : [TimelineViewsService]
})
export class MachineScheduleComponent implements OnInit {

  constructor(private scheduleService: IMachineScheduleService) { }
  private machineInfo : IMachineScheduleInfo[];
  public isLoading : boolean = true;
  public currentDate : Date = new Date(2020, 6, 16, 0, 0, 0);
  public group: GroupModel = {
    resources: ['Linee']
};
  public linee : Linea[];

  public tipiAttivita : TipoAttivita[] = tipiAttivita;
  
  ngOnInit(): void {
    this.scheduleService.getSchedule().subscribe(
      (res) => {        
        res.forEach(r => 
          {
            r.color = tipiAttivita.find(t => t.id == r.Type)?.color ?? 'green';
          })
        this.machineInfo = res;
        this.eventSettings = {
          dataSource: this.machineInfo || [],
          fields: {
            id: 'id',
            subject: { name: 'subject' },
            startTime: { name: 'startDate' },
            endTime: { name: 'dueDate' },
            
          },
          resourceColorField : "Tipi"
        }      
        this.setLinee();
        console.log(this.machineInfo)
        
        this.isLoading = false;

      }
    );
  }
  public eventSettings: EventSettingsModel;
  setLinee(){
    var linee = this.machineInfo.map(i => i.linea)
    linee = linee.filter(filterUnique);
    this.linee =  linee.map(l => ({ id: l, text: l }));
  }

  applyStyle(args: EventRenderedArgs): void {
    let info = args.data;
    console.log(info.type)
    let color = tipiAttivita.find(t => t.id == info.type).color ?? 'green';
    if ( info.type == 2 ||info.type == 3 || info.type ==  4){
      args.element.style.border = "2px solid red"
    }
    args.element.style.backgroundColor = color;
  }
  
}


