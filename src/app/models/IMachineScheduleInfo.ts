/**
 * Interfaccia per gli oggetti utilizzati
 * per popolare lo scheduler di DevExtreme.
 *
 * @export
 * @interface IMachineScheduleInfo
 */
export interface IMachineScheduleInfo {

    ID : number;
    Subject : string;
    StartDate : Date;
    DueDate : Date;
    Linea : string;
    Type : number;
    
}