import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { StoreModule } from '@ngrx/store';
import { FormsModule } from '@angular/forms';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { AppStoreModule } from './store/AppStoreModule';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { eventReducer } from './store/Event/event.reducer';
import { ViewAddEventPage } from './components/view-add-event/view-add-event.page';
import { ViewAddEventPageModule } from './components/view-add-event/view-add-event.module';

@NgModule({
  declarations: [
    AppComponent,
    ViewAddEventPage
  ],
  imports: [
    BrowserModule, 
    IonicModule.forRoot(), 
    AppRoutingModule,
    FormsModule,
    ...AppStoreModule,
    StoreModule.forFeature('events', eventReducer),
    StoreDevtoolsModule.instrument({maxAge: 25})
  ],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
