import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { switchMap, catchError, map } from 'rxjs/operators';
import { of } from 'rxjs';
import * as EventActions from '../../store/event/event.actions';
import { EventService } from './event.service';
import { Event } from '../../models/Event'; 

@Injectable()
export class EventEffects {
  constructor(
    private actions$: Actions,
    private eventService: EventService
  ) {}

  loadEvents$ = createEffect(() => {
    console.log('[Effect] loadEvents$ initialized');  
    return this.actions$.pipe(
      ofType(EventActions.loadEvents),
      switchMap(() =>
        this.eventService.getEvents().pipe(
          map((events: Event[]) => {
            console.log('[Effect] Dispatching loadEventsSuccess', events);
            return EventActions.loadEventsSuccess({ events })
          }),
          catchError(error =>
            of(EventActions.loadEventsFailure({ error }))
          )
        )
      )
    )
});
}