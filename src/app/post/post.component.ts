import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Post } from '../interfaces/post';
import { GetPosts } from '../store/actions/post.actions';
import { selectedPosts } from '../store/selector/post.selector';
import { PostState } from '../store/state/post.state';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  public posts$: Observable<Post[]>;
  title = 'V12';
  constructor(private _store: Store<PostState>, private _router: Router) {
    this.posts$ = this._store.pipe(select(selectedPosts));
  }
  ngOnInit() {
    this._store.dispatch(new GetPosts());
  }

}
