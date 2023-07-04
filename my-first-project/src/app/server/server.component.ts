import { Component, Input } from '@angular/core';

@Component({
    selector: "app-server",     // as an element
    // selector: "[app-server]",   // as an attribute
    // selector: ".app-server",    // as a class
    templateUrl: "./server.component.html",
    styleUrls: ["./server.component.css"]
})
    
export class ServerComponent {

    // String Interpolation:
    serverId: number = 145;
    serverStatus: string = 'Offline';

    getServerStatus() {
        return this.serverStatus;
    }

    // Property Binding:
    allowNewServer = false;
    constructor() {
        setTimeout(() => {
            this.allowNewServer = true;
        }, 2000);
    }

    // Event Binding:
    serverCreationStatus: string = "No server was created.";
    onServerCreation() {
        this.serverCreationStatus = "Server was created.";
    }

    serverName = '';
    onUpdateServerName(event: Event) {
        this.serverName = (<HTMLInputElement>event.target).value;
    }
}