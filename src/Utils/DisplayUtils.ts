import * as   Moment  from 'moment'

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
   
   
