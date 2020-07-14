import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IMachineScheduleInfo } from 'src/app/models/IMachineScheduleInfo';


/**
 * Classe astratta per servizi utilizzati per recuperare dati
 * delle attività che devono essere svolte sulle macchine.
 *
 * @export
 * @abstract
 * @class IMachineScheduleService
 */

export abstract class IMachineScheduleService {

  constructor() { }

  /**
   * Metodo che ritorna le attività delle macchine.
   *
   * @abstract
   * @returns {Observable<Array<IMachineScheduleInfo>>}
   * @memberof IMachineScheduleService
   */
  abstract getSchedule() : Observable<Array<IMachineScheduleInfo>>;
}
