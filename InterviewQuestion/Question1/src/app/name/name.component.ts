import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-name',
  templateUrl: './name.component.html',
  styleUrls: ['./name.component.css']
})
export class NameComponent {
  @Output() nameUpdated = new EventEmitter<{firstName: string, lastName: string}>();
  @Input() firstName: string;
  @Input() lastName: string;

  onUpdateName() {
    this.nameUpdated.emit({
      firstName: this.firstName,
      lastName: this.lastName
    })
  }
}
