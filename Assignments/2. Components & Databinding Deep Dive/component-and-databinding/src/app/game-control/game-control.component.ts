import { Text } from '@angular/compiler';
import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})

export class GameControlComponent {
  @Output() intervalFired = new EventEmitter<number>();
  interval;
  lastNumber = 0;
  startDisabled = false;
  pauseDisabled = false;

  onStartResumeGame() {
    this.interval = setInterval( () => {
      this.intervalFired.emit(this.lastNumber + 1);
      this.lastNumber += 1;
    }, 1000);

    const elem1 = document.getElementById('start-resume-button');
    if (elem1.innerText === "Start Game") {
      elem1.innerText = "Resume Game";
    }

    this.startDisabled = true;
    this.pauseDisabled = false;
  }

  onPauseGame() {
    clearInterval(this.interval);
    this.startDisabled = false;
    this.pauseDisabled = true;
  }
}
