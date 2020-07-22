/**
 * Interfaccia per gli oggetti utilizzati
 * per popolare lo scheduler di DevExtreme.
 *
 * @export
 * @interface IMachineScheduleInfo
 */
export interface IMachineScheduleInfo {

    id : number;
    subject : string;
    startDate : Date;
    dueDate : Date;
    linea : string;
    Type : number;
    shippingDate? : Date;
    logisticDate? : Date;


}