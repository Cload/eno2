import { Injectable } from '@angular/core';
import { IMachineScheduleService } from '../imachine-schedule/imachine-schedule.service';
import { Observable } from 'rxjs';
import { IMachineScheduleInfo } from 'src/app/models/IMachineScheduleInfo';
import { from } from 'rxjs';
import { MachineScheduleInfo } from 'src/app/models/MachineScheduleInfo';

@Injectable({
  providedIn: 'root'
})
export class MockMachineScheduleService extends IMachineScheduleService{
  
  mockData : string = "[{\"ID\":2153,\"Subject\":\"CTD6060A34XGRCT CAT. DIN766 mm   6X18,5X20,4 GREZZA CONT\",\"StartDate\":\"2020-05-18T00:00:00\",\"DueDate\":\"2020-10-12T15:00:00\",\"UserStartDate\":\"2020-05-18T00:00:00\",\"UserDueDate\":\"2020-10-12T15:00:00\",\"OwnerID\":null,\"ODL\":\"000000000639942\",\"Linea\":5,\"KgOra\":66,\"Type\":1,\"ForceToProduction\":true,\"ForceEndProduction\":false,\"RingNumber\":5,\"RingWeight\":68,\"Notes\":\"\",\"Quantity\":77571,\"QuantityLot\":31534,\"QuantityMade\":32310,\"DailyHours\":15,\"SaturdayDailyHours\":0,\"SundayDailyHours\":0,\"Cost\":0.67,\"SetupHours\":0,\"ExecutiveEventOnTheLine\":false,\"NextEventOnTheLine\":false,\"FollowTheProduction\":false,\"LastInProduction\":true,\"PreviousEventDescription\":\"\",\"IsPreviousEventInProduction\":false,\"IsCompleted\":false,\"CastingID\":null,\"CastingDescription\":null,\"OdlAvailableList\":[{\"ODC\":\"000000000639942\",\"ItemCode\":\"CTD6060A34XGRCT     \",\"ItemDescription\":\"CAT. DIN766 mm   6X18,5X20,4 GREZZA CONT\",\"Qty\":33526.5}],\"ContainerBarcode\":null,\"CompletedProduction\":0,\"PositionName\":\"MF1\",\"CastingAvailableList\":[{\"CastingID\":39,\"CastingCode\":\"87609\",\"CastingDescription\":\"87609 A34L ALFA\",\"SupplierName\":\"ALFA\"}]}]";
  getSchedule(): Observable<Array<MachineScheduleInfo>> {
    var rawData : Array<Object> = JSON.parse(this.mockData);
    var res = rawData.map(o => 
      {
        var info : MachineScheduleInfo = new MachineScheduleInfo();
        info.ID = o["ID"];
        info.StartDate =  o["StartDate"];
        info.Subject = o["Subject"];
        info.DueDate = o["DueDate"];
        info.Linea = o["Linea"];
        info.Type =  o["Type"];
        info.text = info.getTextFromType();
        return info;
      });
    return from([res]);
  }

  constructor() {
    super();
  }
}
