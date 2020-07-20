export function getMonday(d : Date): Date{
    d = new Date(d);
    var day = d.getDay(),
        diff = d.getDate() - day + (day == 0 ? -6:1); // Per la domenica
    return new Date(d.setDate(diff));
  }