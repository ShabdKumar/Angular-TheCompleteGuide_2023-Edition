import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  isDisplayed = true;
  clickLog: number = 0;
  logDetails = [];
  statusParagraph: string = '';

  onToggleDisplay() {
    this.isDisplayed = !this.isDisplayed;
    this.statusParagraph = this.isDisplayed ? 'Hiding' : "Displaying";
    this.clickLog += 1;
    console.log('this.clickLog', this.clickLog);
    this.logDetails.push(`${this.clickLog}. ${this.statusParagraph}`);
  }
}
