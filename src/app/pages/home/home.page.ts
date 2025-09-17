import { Component, inject } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Event } from '../../models/Event';
import { AppState } from '../../store/app-state';
import { selectEvents, selectLoading } from '../../store/event/event.selectors';
import { deleteEvent, loadEvents } from '../../store/event/event.actions';
import { ViewAddEventPage } from '../../components/view-add-event/view-add-event.page';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: false,
})
export class HomePage {
  events$: Observable<Event[]>;
  loading$: Observable<boolean>;

  constructor(
    private modalCtrl: ModalController,
    private store: Store<AppState>
  ) {
    this.events$ = this.store.pipe(select(selectEvents));
    this.loading$ = this.store.select(selectLoading);
  }

  ngOnInit(): void {
    this.store.dispatch(loadEvents());
  }

  async onAddEvent() {
    const modal = await this.modalCtrl.create({
      component: ViewAddEventPage,
    });

    await modal.present();
  }

  onDeleteEvent(event: Event) {
    this.store.dispatch(deleteEvent({ event }));
  }
}
