import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'mfe-user-list';
  userName: string = '';

  @Input()
  set userNameInput(pUserName: string) {
    this.userName = pUserName;
  }
  constructor() {
    console.log(this.userName);
  }
}
