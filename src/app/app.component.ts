import { Component } from '@angular/core';
import { locale, loadMessages, formatMessage } from 'devextreme/localization';

import itMessages from 'devextreme/localization/messages/it.json'

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
  }
}
