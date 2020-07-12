import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MachineScheduleComponent } from './machine-schedule/machine-schedule.component';

@NgModule({
  declarations: [
    AppComponent,
    MachineScheduleComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
