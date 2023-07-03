import { Component } from '@angular/core';

@Component({
  selector: 'app-success-alert',
  template: '<p>success-alert works!</p>',
  // template: '<app-warning-alert></app-warning-alert>',
  styles: [`p {
    color: darkolivegreen;
    font-family: 'Courier New', Courier, monospace;
    padding: 20px;
    background-color: aquamarine;
    border: 1px dotted green;
    box-shadow: 5px 5px 5px green;
    text-align: center;
  }`]
})
export class SuccessAlertComponent {
  constructor() {
    alert('Success Alert!');
  }
}
