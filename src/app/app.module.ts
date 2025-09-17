import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { StoreModule } from '@ngrx/store';
import { FormsModule } from '@angular/forms';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { ViewAddEventPage } from './components/view-add-event/view-add-event.page';
import { reducers } from './store/app.reducers';
import { localStorageSyncReducer } from './store/local-storage.reducer';
import { EffectsModule } from '@ngrx/effects';
import { EventEffects } from './services/event/event.effects';



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
    StoreModule.forRoot(reducers, {
      metaReducers: [localStorageSyncReducer],
    }),
    EffectsModule.forRoot([EventEffects]),
    StoreDevtoolsModule.instrument({maxAge: 25})
  ],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
