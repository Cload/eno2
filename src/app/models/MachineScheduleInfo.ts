import { IMachineScheduleInfo} from "./IMachineScheduleInfo"
import { tipiAttivita } from "../../Utils/LineeUtils"
export class MachineScheduleInfo implements IMachineScheduleInfo
{
    ID: number;
    Subject: string;
    StartDate: Date;
    DueDate: Date;
    Linea: string;
    Type: number;
    text : string;


    getTextFromType() :  string
    {
        var res =  tipiAttivita.find(t => t.id == this.Type);
        return res.text || "Attività sconosciuta";
    }
}