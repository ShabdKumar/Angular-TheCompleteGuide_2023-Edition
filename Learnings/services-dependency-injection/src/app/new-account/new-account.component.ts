import { Component } from '@angular/core';
import { AccountService } from '../account.service';

@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css'],
})
export class NewAccountComponent {
  constructor(private accountService: AccountService) {
    this.accountService.statusUpdated.subscribe((newStatus: string) =>
      alert(`Status updated to ${newStatus}`)
    );
  }

  unsubscribeStatusUpdate() {
    this.accountService.statusUpdated.unsubscribe();
  }

  onCreateAccount(accountName: string, accountStatus: string) {
    this.accountService.onAccountAdded(accountName, accountStatus);
  }
}
