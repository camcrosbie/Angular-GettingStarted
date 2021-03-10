import { Component } from '@angular/core';
import { SnotifyService } from 'ng-snotify';

@Component({
  selector: 'walleye-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  pageTitle: string = 'The Great Walleye Store';
  constructor(private snotifyService: SnotifyService) {}
}


