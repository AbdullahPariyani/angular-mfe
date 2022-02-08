import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'mfe-root';
  MFE_USER_LIST = 'http://localhost:9001/main.js';
  MFE_USER_FORM = 'http://localhost:9002/main.js';
  counter = 0;

  constructor() {
    setInterval(() => {
      this.counter = this.counter + 1
    }, 2000)
  }
}
