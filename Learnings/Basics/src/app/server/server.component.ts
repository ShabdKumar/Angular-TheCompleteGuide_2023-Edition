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
    serverStatus: string = 'offline';

    getServerStatus() {
        return this.serverStatus;
    }

    // Property Binding:
    allowNewServer = false;
    constructor() {
        setTimeout(() => {
            this.allowNewServer = true;
        }, 2000);
        this.serverStatus = Math.random() > 0.5 ? 'online' : 'offline';
    }

    // Event Binding:
    serverCreationStatus: string = "No server was created.";
    onServerCreation() {
        this.serverCreationStatus = "Server was created.";
    }

    serverName: string  = '';
    onUpdateServerName(event: Event) {
        this.serverName = (<HTMLInputElement>event.target).value;
    }

    // Directives:
    serverName1 = '';
    hiding = false;
    onAddServer() {
        this.hiding = true;
    }

    getColor() {
        return this.serverStatus === 'online' ? 'green' : 'red';
    }
}