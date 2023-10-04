import { Injectable } from '@angular/core';
import { Post } from './post.model';
import {
  HttpClient,
  HttpEventType,
  HttpHeaders,
  HttpParams,
} from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import { of, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PostService {
  constructor(private http: HttpClient) {}

  createPost(postData: Post) {
    return this.http.post<{ name: string }>(
      'https://ng-http-request-learning-default-rtdb.asia-southeast1.firebasedatabase.app/posts.json',
      postData,
      {
        observe: 'response',
        // observe: 'body', // default value
        responseType: 'json', // default value
      }
    );
  }

  fetchData() {
    return this.http
      .get<{ [key: string]: Post }>(
        'https://ng-http-request-learning-default-rtdb.asia-southeast1.firebasedatabase.app/posts.json',
        {
          headers: new HttpHeaders({ 'Custom-Header': 'Hello' }),
          // params: new HttpParams().set('print', 'pretty'), // Single Value
          params: new HttpParams({
            fromObject: { print: 'pretty', name: 'bhaskar' }, // Multi Value
          }),
          observe: 'body',
          responseType: 'json',
        }
      )
      .pipe(
        map((responseData) => {
          let filteredArray: Post[] = [];
          for (let key in responseData) {
            if (responseData.hasOwnProperty(key)) {
              filteredArray.push({ ...responseData[key], id: key });
            }
          }
          return filteredArray;
        }),
        catchError((errorRes) => {
          return throwError(() => errorRes);
          // return of(errorRes);
        })
      );
  }

  clearPosts() {
    return this.http
      .delete(
        'https://ng-http-request-learning-default-rtdb.asia-southeast1.firebasedatabase.app/posts.json',
        {
          observe: 'events',
          responseType: 'json',
        }
      )
      .pipe(
        tap((events) => {
          // console.log(events);
          if (events.type === HttpEventType.Sent) {
            console.log('Query Sent.');
          } else if (events.type === HttpEventType.Response) {
            console.log(events);
          }
        })
      );
  }
}
