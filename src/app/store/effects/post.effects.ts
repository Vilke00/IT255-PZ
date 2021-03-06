import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { of } from "rxjs";
import { GetPosts, EnumPostAction, GetPostsSuccess } from '../actions/post.actions';
import { switchMap } from 'rxjs/operators';
import { Post } from '../../interfaces/post';
import { PostService } from '../../services/post.service';
import { createEffects } from "@ngrx/effects/src/effects_module";

@Injectable()
export class PostEffect {
    constructor(private _actions$: Actions,
        private _postService: PostService) {
    }

    getPosts$ = createEffect(() =>
    this._actions$.pipe(
        ofType<GetPosts>(EnumPostAction.GetPosts),
        switchMap(() => this._postService.fetchPosts()),
        switchMap((postHttp: Post[]) => {
            return of(new GetPostsSuccess(postHttp))
        })
    )
)

}