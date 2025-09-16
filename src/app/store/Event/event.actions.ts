import {Injectable} from '@angular/core';
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

export const loadEvents = createAction(
  'Event Load events from store',
  (events: Event[]) => ({ events })
)
