import { Injectable } from "@angular/core";
import { Store } from "@ngrx/store";
import { AppState } from "../../store/app-state";
import { delay, Observable, tap } from "rxjs";
import { loadEventsSuccess } from "../../store/event/event.actions";
import { Event } from '../../models/Event'; 

@Injectable({
  providedIn: 'root',
})
export class EventService {
  constructor(private store: Store<AppState>) {}

  getEvents(): Observable<Event[]> {
  return this.store.select(state => state.events.events).pipe(
    delay(1000)
  );
}
}