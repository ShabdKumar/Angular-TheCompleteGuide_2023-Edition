import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  numbers: number[] = [1, 2, 3, 4, 5, 6];
  oddNumbers: number[] = [];
  evenNumbers: number[] = [];
  onlyOdd = true;

  constructor() {
    for (let number of this.numbers) {
      if (number % 2 == 0) {
        this.evenNumbers.push(number);
      } else {
        this.oddNumbers.push(number);
      }
    }
  }
}
