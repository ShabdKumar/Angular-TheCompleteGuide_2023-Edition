import { Component, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css'],
})
export class InputComponent {
  @Output() serverCreated = new EventEmitter<{
    serverName: string;
    serverContent: string;
    serverDetails: string
  }>();
  @Output() blueprintCreated = new EventEmitter<{
    serverName: string;
    serverContent: string;
    serverDetails: string
  }>();
  newServerName = '';
  // newServerContent = '';
  @ViewChild('serverDetailsInput') serverDetailsInput: ElementRef;

  onAddServer(serverContentInput) {
    this.serverCreated.emit({
      serverName: this.newServerName,
      serverContent: serverContentInput.value,
      serverDetails: this.serverDetailsInput.nativeElement.value
    });
  }

  onAddBlueprint(serverContentInput) {
    this.blueprintCreated.emit({
      serverName: this.newServerName,
      serverContent: serverContentInput.value,
      serverDetails: this.serverDetailsInput.nativeElement.value
    });
  }
}
