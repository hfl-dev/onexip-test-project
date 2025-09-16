import { ChangeDetectionStrategy, Component, inject, Input, Output, EventEmitter } from '@angular/core';
import { Event } from '../../models/Event';

@Component({
  selector: 'app-event-item',
  templateUrl: './event-item.component.html',
  styleUrls: ['./event-item.component.scss'],
  standalone: false,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EventComponent {
  @Input() event?: Event;
  @Output() delete = new EventEmitter<Event>();

  onDelete() {
    if (!this.event) return;
    this.delete.emit(this.event);
  }
}
