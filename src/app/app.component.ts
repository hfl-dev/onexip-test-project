import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
  standalone: false,
})
export class AppComponent {
  constructor(private router: Router) {
  this.router.events.subscribe(() => {
    const hasModal = this.router.url.includes('(modal:');
    document.body.classList.toggle('modal-open', hasModal);
  });
}
}
