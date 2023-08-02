import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription, interval } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit, OnDestroy {
  private firstObservableSubscription: Subscription;
  private customObservableSubscription: Subscription;

  constructor() {}

  ngOnInit() {
    // using inbuilt Observable:
    this.firstObservableSubscription = interval(1000).subscribe(
      (count: number) => {
        console.log(count);
      }
    );

    //creating custom observable:
    const customObservable = Observable.create((observer) => {
      let count = 1000;
      setInterval(() => {
        observer.next(count);
        count++;
      }, 1000);
    });

    this.customObservableSubscription = customObservable.subscribe(
      (data: number) => {
        console.log(data);
      }
    );
  }

  ngOnDestroy(): void {
    this.firstObservableSubscription.unsubscribe();
    this.customObservableSubscription.unsubscribe();
  }
}
