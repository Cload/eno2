import * as   Moment  from 'moment'
import { EventRenderedArgs } from '@syncfusion/ej2-angular-schedule';
import { filterUnique } from './ArrayUtils';
import { IMachineScheduleInfo } from 'src/app/models/IMachineScheduleInfo';

// Larghezza dei segnaposto delle date di scadenza.
// Deve essere uguale alla larghezza della classe "pin"
export const PinWidth : string = "70px";

// Altezza dei segnaposto delle date di scadenza.
// Deve essere uguale all'altezza della classe "pin"
export const PinHeight : string = "35px";

//Altezza degli appuntamenti che hanno i pin
// È basata sull'altezza di default degli appuntamenti che è di 38 px
export const AppointmentWithPinHeight : string = "75px";

export const DefaultAppointmentHeight : string = "38px";


export const DeadLineTypes : Map<string, string> = new Map<string, string>([
   ["shippingDate", "#522d80"],
   ["logisticDate", "#9B111E"]
]);
   


export function getMonday(d : Date): Date{
   let  startOfWeek = Moment().startOf("isoWeek").toDate();
   return startOfWeek;
  }

export function getBlinkingAnimation(color : string) : Keyframe[]{
   return [
      {   borderColor :  'transparent'},
      {   borderColor :  `${color}`},
   ]  
  }
   

export function setPinBackgroundColor(element: HTMLElement, types: ("shippingDate" | "logisticDate")[])
{
   if (!types) {
      return;
   }
   types = types.filter(filterUnique); 
   if (types.length > 1){
      let firstColor : string = DeadLineTypes.get(types[0]);
      let secondColor : string = DeadLineTypes.get(types[1]);
      element.style.setProperty("background", `linear-gradient(90deg, ${firstColor} 50%, ${secondColor} 50%)`);
   } else if (types.length == 1) {
      element.style.backgroundColor = DeadLineTypes.get(types[0]);
   }
   
}

export function getDeadLinePin(datetime: Date, types: ("shippingDate" | "logisticDate")[], document: Document) : HTMLElement
{
   let stringDate : string = Moment(datetime).format("HH:mm"); 
   let template : string = 
   `
   <div class="pin">
      <div class="position: relative; height:100%; width: 100%">
         <span>${stringDate}</span>
         <div class="arrow-down"> 
         </div>
      </div>
   </div>
   `; 
   let element : HTMLElement = document.createElement("div");
   element.innerHTML = template;
   let res  = element.querySelector(".pin") as HTMLElement;
   return element;
}

export function buildAppointmentWithPins(args: EventRenderedArgs, document: Document){
   let data : IMachineScheduleInfo = args.data as unknown as IMachineScheduleInfo;
   if (!data) {
      return;
   }
   if (data.shippingDate) {
   let stickyPoint = getDeadLinePin(data.shippingDate, [], document);
   stickyPoint.style.height = DefaultAppointmentHeight;
   stickyPoint.style.width = args.element.style.width;
   stickyPoint.style.position = "absolute";
   stickyPoint.style.zIndex = "6";
   args.element.appendChild(stickyPoint);
   }

}