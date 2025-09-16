import {Action, createReducer, on} from '@ngrx/store';
import {addEvent, deleteEvent, loadEvents} from './event.actions';
import {EventState} from './event.state'; 


export const initialState: EventState = {
  events: [{
    id: '1',
    name: 'Initial Event',
    date: new Date()    
  }]
}

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

  on(loadEvents, (state, { events }) => ({
    ...state,
    events: [...events],
  }))
);

export function loadingReducer(state: EventState, action: Action) {
    return eventReducer(state, action);
}