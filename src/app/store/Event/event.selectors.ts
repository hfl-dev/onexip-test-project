import { createFeatureSelector, createSelector } from '@ngrx/store';
import { EventState } from './event.state';

export const selectEventState = createFeatureSelector<EventState>('events');

export const selectEvents = createSelector(
  selectEventState,
  (state) => state.events
);
