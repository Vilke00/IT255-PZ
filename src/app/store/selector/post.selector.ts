import { createSelector } from '@ngrx/store';
import { PostState } from '../state/post.state';

const selectPosts = (state: any) => state.post;

export const selectedPosts = createSelector(
    selectPosts,
    (state: PostState) => {
        console.log('selector', state);
        return state.posts;
    }
);
