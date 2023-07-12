import { ViewEncapsulation } from '@angular/core';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.None
})

export class AppComponent {
  serverElements = [{type: 'server', name: "server1", content: 'content', details: 'details'}];

  onServerCreated(serverData: {serverName: string, serverContent: string, serverDetails: string}) {
    this.serverElements.push({
      type: 'server',
      name: serverData.serverName,
      content: serverData.serverContent,
      details: serverData.serverDetails
    })
  }

  onBlueprintCreated(blueprintData: {serverName: string, serverContent: string, serverDetails: string}) {
    this.serverElements.push({
      type: 'blueprint',
      name: blueprintData.serverName,
      content: blueprintData.serverContent,
      details: blueprintData.serverDetails
    })
  }
}
