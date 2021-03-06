import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AngularFireDatabaseModule } from 'angularfire2/database'
import { AngularFireModule } from 'angularfire2';
import { AppComponent } from './app.component';
import { masterFirebaseConfig } from './api-keys';
import { HomeComponent } from './home/home.component';
import { Player } from './models/player.model';
import { PlayerService } from './player.service';
import { Injectable } from '@angular/core';
import { LootCrate } from './models/lootcrate.model'

import { routing } from './app.routing';

import { BattleComponent } from './battle/battle.component';
import { LootCrateComponent } from './loot-crate/loot-crate.component';

export const firebaseConfig = {
  apiKey: masterFirebaseConfig.apiKey,
  authDomain: masterFirebaseConfig.authDomain,
  databaseURL: masterFirebaseConfig.databaseURL,
  storageBucket: masterFirebaseConfig.storageBucket
};

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BattleComponent,
    LootCrateComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule
  ],
  providers: [PlayerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
