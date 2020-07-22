import { Component, OnInit, ViewChild, ViewEncapsulation, Inject } from '@angular/core';
import { IMachineScheduleInfo } from '../models/IMachineScheduleInfo';
import { Linea } from '../../types/Linea'
import { TipoAttivita} from '../../types/TipoAttivita'
import { IMachineScheduleService } from '../services/imachine-schedule/imachine-schedule.service';
import { filterUnique } from '../../Utils/ArrayUtils'
import { tipiAttivita } from '../../Utils/LineeUtils'
import { getMonday, getBlinkingAnimation } from '../../Utils/DisplayUtils'
import { EventSettingsModel, GroupModel, TimelineViewsService, EventRenderedArgs, DayService, TimelineMonthService, TimeScaleModel, ScheduleComponent, HeaderRowsModel, HoverEventArgs, ActionEventArgs,} from '@syncfusion/ej2-angular-schedule';


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
    let data = args.data;
    let styleInfo = tipiAttivita.find(t => t.id == data.type);
    if (styleInfo ==  undefined){
      return;
    }
    args.element.style.backgroundColor = styleInfo.color;
    if (styleInfo.hasBorder){
      args.element.style.setProperty("border-width", "5px", "important");
      args.element.style.borderColor = styleInfo.borderColor;
    }
    if (styleInfo.shouldBorderBlink)
    {
      args.element.animate(getBlinkingAnimation(styleInfo.borderColor), {duration : 800, iterations: Infinity});
    }
  }

  actionComplete(args : ActionEventArgs){
    let scheduleElement: HTMLElement = this.machineScheduler.element;
    if (!scheduleElement){
      return;
    }
    let template : string = `
    <div id="infotoolbar" style="display:flex; width:100% !important;">
      <div>
        <span>Cambi settimanali: 200</span>
      </div>
      <div>
        <span>Cambi non assegnati: 50</span>
      </div>
      <div>
        <span>Ordini on time: 58</span>
      </div>
      <div>
        <span>Ordini non on time : 32</span>
      </div>
    </div>
    `
    let element : HTMLElement =  new DOMParser().parseFromString(template, 'text/xml').firstElementChild as HTMLElement
    let toolbar : HTMLElement  = scheduleElement.querySelector(".e-schedule-toolbar-container");
    toolbar.appendChild(element);
    console.log(element);
   

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


