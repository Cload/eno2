import * as   Moment  from 'moment'

export function getMonday(d : Date): Date{
   let  startOfWeek = Moment().startOf("isoWeek").toDate();
   console.log(startOfWeek)
   return startOfWeek;
  }