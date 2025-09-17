import {createReducer, on} from '@ngrx/store';
import {addEvent, deleteEvent, loadEvents, loadEventsFailure, loadEventsSuccess} from './event.actions';
import {initialState} from './event.state'; 

export const eventReducer = createReducer(
  initialState,
  on(addEvent, (state, action) => ({
    ...state,
    events: [...state.events, action.event],
  })),

  on(deleteEvent, (state, action) => ({
    ...state,
    events: state.events.filter(e => e !== action.event),
  })),

  on(loadEvents, state => ({
    ...state,
    loading: true,
    error: null,
  })),

  on(loadEventsSuccess, (state, { events }) => ({
    ...state,
    events,
    loading: false,
  })),

  on(loadEventsFailure, (state, { error }) => ({
    ...state,
    loading: false,
    error,
  }))
);
