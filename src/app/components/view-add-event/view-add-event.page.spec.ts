import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';

import { ViewAddEventPage } from './view-add-event.page';

describe('ViewAddEventPage', () => {
  let component: ViewAddEventPage;
  let fixture: ComponentFixture<ViewAddEventPage>;

  beforeEach(async () => {
    TestBed.configureTestingModule({
      declarations: [ViewAddEventPage],
      imports: [IonicModule.forRoot(), RouterModule.forRoot([])]
    }).compileComponents();

    fixture = TestBed.createComponent(ViewAddEventPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
