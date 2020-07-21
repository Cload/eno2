import { Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { IMachineScheduleInfo } from '../models/IMachineScheduleInfo';
import { Linea } from '../../types/Linea'
import { TipoAttivita} from '../../types/TipoAttivita'
import { IMachineScheduleService } from '../services/imachine-schedule/imachine-schedule.service';
import { filterUnique } from '../../Utils/ArrayUtils'
import { tipiAttivita } from '../../Utils/LineeUtils'
import { getMonday } from '../../Utils/DisplayUtils'
import * as moment from 'moment'
import { EventSettingsModel, GroupModel, TimelineViewsService, EventRenderedArgs, DayService, TimelineMonthService, TimeScaleModel, ScheduleComponent, HeaderRowsModel, HoverEventArgs,} from '@syncfusion/ej2-angular-schedule';


@Component({
  selector: 'machine-schedule',
  templateUrl: './machine-schedule.component.html',
  styleUrls: ['./machine-schedule.component.scss'],
  providers : [TimelineViewsService, DayService, TimelineMonthService],
  encapsulation: ViewEncapsulation.None
})
export class MachineScheduleComponent implements OnInit {

  constructor(private scheduleService: IMachineScheduleService) 
  { 
   
  }

  @ViewChild('machineScheduleRef')
  private machineScheduler : ScheduleComponent;
  private machineInfo : IMachineScheduleInfo[];
  public isLoading : boolean = true;
  public currentDate : Date = this.getInitialDate();
  public group: GroupModel = {
    resources: ['Linee'],
    enableCompactView : false
};
  public linee : Linea[];
  public locale : string = "it";
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
          resourceColorField : "Tipi",
          enableTooltip : true
        }      
        this.setLinee();
        this.isLoading = false;
      }
    );
  }
  public eventSettings: EventSettingsModel;
  getInitialDate(): Date{
    //Inizializza il calendario il lunedì alle 00:00
    let date : Date = getMonday(new Date());
    return date;
  }
  setLinee(){
    var linee = this.machineInfo.map(i => i.linea)
    linee = linee.filter(filterUnique);
    this.linee =  linee.map(l => ({ id: l, text: l }));
  }

  applyStyle(args: EventRenderedArgs): void {
    let info = args.data;
    let color = tipiAttivita.find(t => t.id == info.type).color ?? 'green';
    if ( info.type == 2 ||info.type == 3 || info.type ==  4){
      args.element.classList.add('borderblink');
    }
    args.element.style.backgroundColor = color;
  }

  public get timeScaleOptions(): TimeScaleModel 
  {
    return {
      enable : true,
      interval: 60,
    }
  };

  public  weekTimeScaleOptions: TimeScaleModel =
  {
    enable : true,
    interval: 120, 
  };



}


