import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'mfe-root';
  MFE_USER_LIST = 'http://127.0.0.1:9002/main.js';
  MFE_USER_FORM = 'http://127.0.0.1:9001/main.js'
}
