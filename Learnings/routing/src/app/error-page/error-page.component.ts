import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Data } from '@angular/router';
import { Subscription } from 'rxjs/internal/Subscription';

@Component({
  selector: 'app-error-page',
  templateUrl: './error-page.component.html',
  styleUrls: ['./error-page.component.css']
})
export class ErrorPageComponent implements OnInit, OnDestroy{
  message: string;
  subscription:Subscription;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.message = this.route.snapshot.data['message'];
    this.subscription = this.route.data.subscribe(
      (data: Data) => {
        this.message = data['message'];
      }
    );
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
