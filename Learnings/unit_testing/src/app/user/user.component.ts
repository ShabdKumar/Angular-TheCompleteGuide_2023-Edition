import { Component, OnInit } from '@angular/core';
import { UserDataService } from './user-data.service';
import { DataService } from '../data-service/data.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
})
export class UserComponent implements OnInit {
  user!: { name: string };
  fullName = '';
  isLoggedIn = false;
  data!: string;

  constructor(
    private userDataService: UserDataService,
    private dataService: DataService
  ) {}

  ngOnInit() {
    this.user = this.userDataService.user;
    this.dataService.getData().then((data: string) => this.data = data);
  }

  getName(partialName: string) {
    if (partialName === 'Shabd') {
      this.fullName = 'Shabd Kumar';
    } else {
      this.fullName = 'Nikhil singh';
    }
  }
}
