import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Question1';
  firstName = 'Shabt';
  lastName = 'Kumar';

  onNameUpdate(nameUpdated: {firstName: string, lastName: string}) {
    this.firstName = nameUpdated.firstName,
    this.lastName = nameUpdated.lastName
  }
}
