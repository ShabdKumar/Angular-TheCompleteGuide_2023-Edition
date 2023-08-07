import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription, filter, interval, map } from 'rxjs';

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

    /* creating custom observable: */
    const customObservable = Observable.create((observer) => {
      let count = 1000;
      setInterval(() => {
        observer.next(count);
        if (count > 1003) {
          observer.error(new Error('Greater Than 3!'));
        }
        if (count === 1003) {
          observer.complete();
        }
        count++;
      }, 1000);
    });

    // this.customObservableSubscription = customObservable.subscribe(
    //   (data: number) => {
    //     console.log(data);
    //   },
    //   (error: Error) => {
    //     console.log(error.message);
    //   },
    //   () => {
    //     console.log('Completed!');
    //   }
    // );

    /* Operators */
    this.customObservableSubscription = customObservable
      .pipe(
        filter((data: number) => {
          return data > 1000;
        }),
        map((data: number) => {
          return `Round: ${data + 1}`;
        })
      )
      .subscribe(
        (data: number) => {
          console.log(data);
        },
        (error: Error) => {
          console.log(error.message);
        },
        () => {
          console.log('Completed!');
        }
      );
  }

  ngOnDestroy(): void {
    this.firstObservableSubscription.unsubscribe();
    this.customObservableSubscription.unsubscribe();
  }
}
