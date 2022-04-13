import { PostActions, EnumPostAction } from '../actions/post.actions';
import { initialPostsState, PostState } from '../state/post.state';

export function postReducer(
    state = initialPostsState,
    action: PostActions) {
    switch (action.type) {
        case EnumPostAction.GetPostsSuccess: {
            console.log('NESTO', action.payload);
            return {
                ...state,
                posts: action.payload
            };
        }
        default:
            return state;
    }
};
