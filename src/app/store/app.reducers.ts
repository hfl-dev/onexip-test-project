import { ActionReducerMap } from '@ngrx/store';
import { AppState } from './app-state';
import { eventReducer } from './event/event.reducer';

export const reducers: ActionReducerMap<AppState> = {
  events: eventReducer,
};