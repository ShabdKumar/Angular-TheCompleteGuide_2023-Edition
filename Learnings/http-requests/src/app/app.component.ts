import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Post } from './post.model';
import { PostService } from './post.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  loadedPosts: Post[] = [];
  isFetching: boolean = false;
  error = null;

  constructor(private http: HttpClient, private postService: PostService) {}

  ngOnInit() {
    this.fetchingData();
  }

  onCreatePost(postData: Post) {
    this.postService.createPost(postData).subscribe((responseData) => {
      console.log(responseData);
      this.fetchingData();
    });
  }

  onFetchPosts() {
    this.fetchingData();
  }

  private fetchingData() {
    this.isFetching = true;
    this.postService.fetchData().subscribe({
      next: (posts) => {
        this.loadedPosts = posts;
        this.isFetching = false;
      },
      error: (error) => {
        this.isFetching = false;
        this.error = error.error.error;
        // console.error(error);
      },
      complete: () => {
        // console.info('complete');
      },
    });
  }

  onClearPosts() {
    this.postService.clearPosts().subscribe(() => {
      this.loadedPosts = [];
    });
  }

  onHandlingError() {
    this.error = null;
  }
}
