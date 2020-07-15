import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { DxSchedulerModule } from 'devextreme-angular' 
import { AppComponent } from './app.component';
import { MachineScheduleComponent } from './machine-schedule/machine-schedule.component';
import { IMachineScheduleService } from './services/imachine-schedule/imachine-schedule.service'
import { MachineScheduleService } from './services/machine-schedule/machine-schedule.service'
import { HttpClientModule } from '@angular/common/http';
import { DayService, WeekService, WorkWeekService, MonthService, AgendaService } from '@syncfusion/ej2-angular-schedule';
import { ScheduleModule } from '@syncfusion/ej2-angular-schedule';


@NgModule({
  declarations: [
    AppComponent,
    MachineScheduleComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ScheduleModule,
  ],
  providers: [
    DayService, WeekService, WorkWeekService, MonthService,
    { provide: IMachineScheduleService, useClass: MachineScheduleService}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
