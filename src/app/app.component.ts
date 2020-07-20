import { Component } from '@angular/core';
import { locale, loadMessages, formatMessage } from 'devextreme/localization';

import itMessages from 'devextreme/localization/messages/it.json'
import { loadCldr} from '@syncfusion/ej2-base';
import * as numberingSystems from 'cldr-data/supplemental/numberingSystems.json';
import * as gregorian from 'cldr-data/main/it/ca-gregorian.json'
import * as numbers from 'cldr-data/main/it/numbers.json';
import * as timeZoneNames from 'cldr-data/main/it/timeZoneNames.json';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'CalendarioMacchine';

  constructor(){
    loadMessages(itMessages);
    locale("it-IT")
    loadCldr(numberingSystems['default'], gregorian['default'], numbers['default'], timeZoneNames['default']);
  }
}
