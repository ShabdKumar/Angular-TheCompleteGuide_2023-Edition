import { Component } from '@angular/core';

@Component({
  selector: 'app-success-alert',
  template: '<p>success-alert works!</p>',
  // template: '<app-warning-alert></app-warning-alert>',
  styles: [`p {
    color: darkolivegreen;
    font-family: 'Courier New', Courier, monospace;
  }`]
})
export class SuccessAlertComponent {
  constructor() {
    alert('Success Alert!');
  }
}
