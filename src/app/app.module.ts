import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { DxSchedulerModule } from 'devextreme-angular' 
import { AppComponent } from './app.component';
import { MachineScheduleComponent } from './machine-schedule/machine-schedule.component';
import { IMachineScheduleService } from './services/imachine-schedule/imachine-schedule.service'
import { MockMachineScheduleService } from './services/mock-machine-schedule/mock-machine-schedule.service'

@NgModule({
  declarations: [
    AppComponent,
    MachineScheduleComponent
  ],
  imports: [
    BrowserModule,
    DxSchedulerModule,
  ],
  providers: [
    { provide: IMachineScheduleService, useClass: MockMachineScheduleService}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
