
import { Component,  } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { v4 as uuidv4 } from 'uuid';
import { Event } from '../../models/Event';
import { Store } from '@ngrx/store';
import { AppState } from '../../store/app-state';
import { addEvent } from '../../store/event/event.actions';

@Component({
  selector: 'app-view-add-event',
  templateUrl: './view-add-event.page.html',
  styleUrls: ['./view-add-event.page.scss'],
  standalone: false,
}) 
export class ViewAddEventPage {
  name = '';
  date = '';

  constructor(
    private modalCtrl: ModalController,
    private store: Store<AppState>
  ) {
    console.log('ViewAddEventPage loaded');
  }

  save() {
    const newEvent: Event = {
      id: uuidv4(),
      name: this.name,
      date: new Date(this.date),
    };
    this.store.dispatch(addEvent({ event: newEvent }));
    this.modalCtrl.dismiss()
  }

  cancel() {
    console.log('Cancel button clicked');
    this.modalCtrl.dismiss();
  }
}