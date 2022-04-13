import { ActionReducerMap } from "@ngrx/store";
import { PostState } from "../state/post.state";
import { postReducer } from "./post.reducer";

export const rootReducer = {};

export interface AppState {
    post: PostState;
}

export const reducers: ActionReducerMap<AppState, any> = {
    post: postReducer
}