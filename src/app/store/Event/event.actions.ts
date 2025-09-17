import {Action, createAction, props} from '@ngrx/store';

import {Event} from '../../models/Event';


export const addEvent = createAction(
  '[Events] Add event',
  props<{ event: Event }>()
)

export const deleteEvent = createAction(
  'Event Delete event from store',
  props<{ event: Event }>()
)

export const loadEvents = createAction('[Event] Load Events');

export const loadEventsSuccess = createAction(
  '[Event] Load Events Success',
  props<{ events: Event[] }>()
);

export const loadEventsFailure = createAction(
  '[Event] Load Events Failure',
  props<{ error: any }>()
);
